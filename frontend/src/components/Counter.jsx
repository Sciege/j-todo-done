export default function Counter({ todoDone }) {
  const todos = todoDone || [];
  
  const completedCounter = todos.filter((i) => i.completed).length;
  const totalCounter = todos.length;

  return (
    <div className="app-container-counter" style={{ color: "black" }}>
      <div className="row-words-circle">
        <div className="words">
          <p className="p1">Todo Done</p>
          <p className="p2">keep it up</p>
        </div>

        <div className="circle-count">
          <span className="completed">{completedCounter}</span>
          <span className="slash">/</span>
          <span className="not-completed">{totalCounter}</span>
        </div>
      </div>
    </div>
  );
}
