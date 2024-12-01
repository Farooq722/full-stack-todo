const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://farooqytworld:MCmsI1ZfOMxGYAB3@cluster0.wrgm2.mongodb.net/todos");

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