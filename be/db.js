const mongoose = require("mongoose");

<<<<<<< HEAD
mongoose.connect("http://localhost:27017/todos");
=======
mongoose.connect("mongodb+srv://farooqytworld:MCmsI1ZfOMxGYAB3@cluster0.wrgm2.mongodb.net/todos");
>>>>>>> f5e493faa2d611224e0dd0a67f928343ff3dd8dc

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