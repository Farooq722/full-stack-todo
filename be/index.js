const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
    res.json({
        message: "hello world"
    })
})

app.get("/todos", (req, res ) => {
    res.json({
        message: "hello world hjsdfhdssdfsdfsd adfsdfsad"
    })
});

app.put("/completed", (req, res) => {

    res.json({
        message: "hello world adfs afsdfs"
    })
})

app.listen(3000, ()=> {
    console.log("port listening on 3000");
});