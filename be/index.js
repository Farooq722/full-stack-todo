const express = require('express'); 
const authRoute = require("./routes/auth");
const todoRoute = require("./routes/todo");
const error = require("./utils/error");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = 3000;


dotenv.config()

const corsOptions = {
    origin: "http://localhost:5178",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/user", authRoute);
app.use("/api/todos", todoRoute);

app.get("/", (req, res, next) => {
    console.log("hello world");
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({error: message});
})

app.listen(port, () => {
    console.log(`Port is listening on ${port}`);
})