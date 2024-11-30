const express = require("express");
const { createTodo, updateTodo } = require("./zod")
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload){
        res.status(411).json({
            message: "You sent the wrong inputs"
        })
        return;
    }

    //put it in mongodb
})

app.get("/todos", (req, res ) => {
    // const 
});

app.put("/completed", (req, res) => {

   const updatePayload = req.body;
   const parsePayload = updateTodo.safeParse(updatePayload);

   if(!parsePayload){
    res.status(411).json({
        message: "You sent the wrong inputs"
    })
    return;
   }
   
})

app.listen(3000, ()=> {
    console.log("port listening on 3000");
});