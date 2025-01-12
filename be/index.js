<<<<<<< HEAD
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
=======
const express = require("express");
const { createTodo, updateTodo } = require("./zod");
const { todoModel } = require("./db");
const cors = require("cors");
const app = express();                    

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            message: "You sent the wrong inputs"
        })
        return;
    }

    //put it in mongodb
    await todoModel.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async (req, res ) => {
    const todo = await todoModel.find({});

    // console.log(todo);

    res.json({
        todo
    })
});

app.put("/completed", async (req, res) => {

   const updatePayload = req.body;
   const parsePayload = updateTodo.safeParse(updatePayload);

   if(!parsePayload.success){
    res.status(411).json({
        message: "You sent the wrong inputs"
    })
    return;
   }

   await todoModel.update({
    _id: req.body.id
   },{
    completed: true
   })

   res.json({
    message: "Todo marked as completed"
   })
})

app.listen(3000, ()=> {
    console.log("port listening on 3000");
});
>>>>>>> f6cc2de0b74aa137669cab79651a231b2d5e2c89
