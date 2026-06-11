import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            minlength: [3, "Full name must be at least 3 characters long"],
            required: [true, "Full name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
        },
        password: {
            type: String,
            required: [function () {
                return !this.googleId;
            }, "Password is required"],
            minlength: [8, "Password must be at least 6 characters long"],
            select: false, // default queries me password nahi aayega
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },
        aiCredits: {
            type: Number,
            default: 1000
        },
        googleId: {
            type: String,
            unique: true,
            sparse: true, // null values ko ignore karega unique constraint me kyunki multiple users ke paas googleId nahi hoga but unique = true hai.
        }
    }, { timestamps: true }
);

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);