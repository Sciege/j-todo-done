import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Head from "./components/Head";
import Counter from "./components/Counter";
import Forms from "./components/Forms";
import axios from "axios";
import TodoDoneList from "./components/TodoDoneList";

function App() {
  const [todoDone, setTodoDone] = useState([]);
  
  const fetchTodoDone = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todo-done");
      setTodoDone(res.data);
    } catch (err) {
      console.log("Failed to fetch:", err);
    }
  };

  useEffect(() => {
    fetchTodoDone();
  }, []);

  return (
    <div className="app-container">
      <Head />
      <Counter todoDone={todoDone} />
      <Forms onTaskAdded={fetchTodoDone} />
      <TodoDoneList todoDone={todoDone} fetchTodoDone={fetchTodoDone} />
    </div>
  );
}

export default App;