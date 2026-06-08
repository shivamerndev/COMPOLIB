import app from "./src/app.js"
import connectDb from "./src/config/db.config.js"
import { PORT } from "./src/config/env.config.js"


await connectDb();

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`))