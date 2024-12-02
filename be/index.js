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