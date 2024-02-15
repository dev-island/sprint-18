const Todo = require("../models/Todo");
const get = require("lodash/get");

// Create a new todo
exports.create = async (req, res) => {
  const title = get(req, "body.title", "");
  const description = get(req, "body.description", "");
  if (!title || !description) {
    return res.status(400).send({
      message: "Missing one or more required fields: title, description",
    });
  }

  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: 'incomplete',
    tags: req.body.tags,
  });

  await todo
    .save()
    .then((data) => {
      res.send({
        message: "Todo created successfully!!",
        todo: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating todo",
      });
    });
};

// Get all todos
exports.list = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single todo
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update a todo
exports.update = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate
      (req
        .params
        .id, req.body, { new: true });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json(todo);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}
