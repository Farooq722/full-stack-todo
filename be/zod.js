const zod = require("zod");

const creatTodo = new zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    creatTodo: creatTodo,
    updateTodo: updateTodo
}