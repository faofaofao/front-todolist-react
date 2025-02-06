import { useState } from "react";
import apiLocal from "../services/apiLocal";

export default function AddTask() {
  const [newTask, setNewTask] = useState("");

  const addTask = async () => {
    try {
      const response = await apiLocal.post("/tasks", {name: newTask});
      setNewTask(response.data);
    } catch (error) {
      console.error("No puede agregar una tarea nueva", error);
    }
  };

  return (
    <>
    <div>
      <form onSubmit={addTask}>
        <label>
          TASK:
          <input
            type="text"
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};
