const express = require("express");
const router = express.Router();
const ToDo = require("../models/todo");

router.get("/todo", async (request, response) => {
  try {
    const todos = await ToDo.find();
    response.status(200).json(todos);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

router.post("/todo", async (request, response) => {
  try {
    const todo = new ToDo(request.body);
    await todo.save();
    response.status(200).json({ message: "Added successfully!", todo });
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

router.put("/todo/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const dataToUpdate = request.body;
    const todo = await ToDo.findByIdAndUpdate(id, dataToUpdate, { new: true });
    response.status(200).json({ message: "Updated successfully!", todo });
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

router.delete("/todo/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await ToDo.findByIdAndDelete(id);
    response.status(200).json({ message: "Deleted successfully!" });
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

module.exports = router;
