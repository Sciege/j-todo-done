import axios from "axios";
import { useState, useEffect } from "react";
export default function Forms({ onTaskAdded }) {
  const [title, setTitle] = useState("");
//   const [completed, setCompleted] = useState("");

  const addtodoDone = async (e) => {
    e.preventDefault();
    //if title is whitespace return instantly
    if (!title.trim()) return;

    try {
      await axios.post("http://localhost:5000/api/todo-done", {
        title,
        completed: false,
      });

      //remove form
      setTitle("");
    //   setCompleted("");
      if (onTaskAdded) onTaskAdded(); //fixes refresh after adding
    } catch (err) {
      console.log("Failed to add to database:", err);
    }
  };

  return (
    <div>
      <form className="forms" onSubmit={addtodoDone}>
        <input
          type="text"
          placeholder="Write your next task"
          className="task-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">
          <span className="add">+</span>{" "}
        </button>
      </form>
    </div>
  );
}
