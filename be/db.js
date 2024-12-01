const mongoose = require("mongoose");
 
//removed
mongoose.connect("http://localhost:27017/todos");

//schema 
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

//model to export
const todoModel = mongoose.model('todos', todoSchema);

module.exports = {
    todoModel
}