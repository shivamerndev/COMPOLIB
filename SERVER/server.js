import app from "./src/app.js"
import connectDb from "./src/configs/db.config.js"
import { PORT } from "./src/configs/env.config.js"


connectDb();

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`))