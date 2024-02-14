const express = require("express");
const router = express.Router();

const todos = require('./controllers/todos');

router.get('/todos', todos.list);
router.post('/todos', todos.create);

module.exports = router;