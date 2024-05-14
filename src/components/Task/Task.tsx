
import "./Task.css";
import { useEffect, useState } from "react";

function Task() {
  const [completada, setCompletada] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    if (completada == true) {
      setTarefa("Parabéns, você completou!");
    }
  }, [completada]);

  return (
    <div className="container">
      <h1>Tarefa</h1>
      <h3>Status da Tarefa: {tarefa}</h3>
      <button
        onClick={() => {
          setCompletada(!completada);
        }}
      >
        Conclua a Tarefa
      </button>
    </div>
  );
}

export default Task;
