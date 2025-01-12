const express = require("express");
const { getAllTodo, getTodo, addTodo, updateTodo, deleteTodo } = require("../controllers/todo");
const middleware = require("../utils/middleware");

const router = express.Router();

router.get("/", middleware, getAllTodo);

router.post("/", middleware, addTodo);

router.put("/:id", middleware, updateTodo);

router.get("/:id", middleware, getTodo);

router.delete("/:id", middleware, deleteTodo);

module.exports = router;