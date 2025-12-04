import axios from "axios";

export default function TodoDoneList({ todoDone, fetchTodoDone }) {
  const toggleComplete = async (id, currentStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/todo-done/${id}`, {
        completed: !currentStatus,
      });
      fetchTodoDone(); // Refresh the list
    } catch (err) {
      console.log("Failed to update:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo-done/${id}`);
      fetchTodoDone(); // Refresh the list
    } catch (err) {
      console.log("Failed to delete:", err);
    }
  };

  return (
    <div className="todo-list-container">
      {todoDone.map((todo) => (
        <div key={todo._id} className="todo-item">
          <div className="todo-left">
            <div
              className={`todo-checkbox ${todo.completed ? "completed" : ""}`}
              onClick={() => toggleComplete(todo._id, todo.completed)}
            ></div>
            <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
              {todo.title}
            </span>
          </div>

          <div className="todo-actions">
            {/* Edit icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            {/* Delete icon */}
            <svg
              onClick={() => deleteTodo(todo._id)}
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
