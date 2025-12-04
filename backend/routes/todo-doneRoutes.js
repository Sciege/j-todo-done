const express = require("express");
const router = express.Router();

const Todo = require("../models/todo-done");

//POST
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  const saved = await newTodo.save();
  res.json(saved);
});

//READ
router.get("/", async (req, res) => {
  const todo = await Todo.find();
  res.json(todo);
});

//UPDATE
router.put("/:id",async(req,res)=>{
    const update = await Todo.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.json(update);
}); 

//DELETE
router.delete("/:id",async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
});

module.exports = router;