const connectDB = require("../utils/connect");
const Todo = require("../mongoose/todoModel");
const createError = require("../utils/error");

async function getAllTodo(req, res, next) {
    await connectDB();
    const todos = await Todo.find({ userID: req.user.id });
    res.status(200).send(todos);
}

async function getTodo(req, res, next) {
    await connectDB();
    const todo = await Todo.findById(req.params.id);
    if(!todo) {
        return next(createError(404, "Todo do not found"));
    }

    if(todo.userID.toString() != req.user.id) {
        return next(createError(404, "Not Authenticated"));
    }

    res.status(200).send(todo);
}

async function updateTodo(req, res, next) {
    const id = req.params.id;

    if(!req.body) {
        return next(createError(404, "Id not found"));
    }

    try {
        await connectDB();
        const todo = await Todo.findById(id);
        if(todo.userID.toString() != req.user.id) {
            return next(createError(404, "Not Authenticated"));
        }

        todo.title = req.body.title || todo.title;
        if(req.body.isCompleted != req.body.undefined) {
            todo.isCompleted = req.body.isCompleted;
        }
        await todo.save();
        res.status(200).json({
            msg: "Todo updated successfully"
        })
    } catch(err) {
        return next(createError(404, "Todo not found"));
    }
}

async function addTodo(req, res, next) {
    // console.log(req.body);

    if(!req.body || !req.body.title) {
        return next(createError(404, "Title is required"));
    }

    await connectDB();
    const newTodo = new Todo({title: req.body.title, userID: req.user.id});
    await newTodo.save();

    res.status(201).json({
        msg: "todo added successfully"
    });
}

async function  deleteTodo(req, res, next) {
    try {
        await connectDB();
        const todo = await Todo.deleteOne({
            _id: req.params.id,
            userID: req.user.id
        });
        if(!todo.deletedCount) {
            return next(createError(400, "Todo not found"));
        }
        res.status(200).json({
            msg: "Todo Deleted successfully"
        })
    } catch(err) {
        return next(createError(400, "Todo not found"));
    }
}

module.exports = {
    getAllTodo,
    getTodo,
    updateTodo,
    addTodo,
    deleteTodo
};