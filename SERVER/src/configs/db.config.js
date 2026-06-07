import { connect } from "mongoose";
import { MONGO_URI } from "./env.config.js";

const connectDb = async () => {

    try {
        const conn = await connect(MONGO_URI)
        console.log(`Database Connected Successfully at ${conn.connection.host}`)
    } catch (error) {
        console.log(`Failed to connect to database`)
        process.exit(1)
    }
}

export default connectDb