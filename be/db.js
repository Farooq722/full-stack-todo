const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todos");

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