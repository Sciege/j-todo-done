export default function Counter({ todoDone }) {
  if (!todoDone || todoDone.length === 0) {
    return <div>No todos found</div>;
  }

  const completedCounter = todoDone.filter((i) => i.completed).length;
  const totalCounter = todoDone.length;

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
