import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  // category change function
  function handleCategoryChange(category) {
    const filteredTasks =
      category === "All"
        ? TASKS
        : TASKS.filter((task) => task.category === category);
    setTasks(filteredTasks);
  }

  // task form submit function
  function handleFormSubmit(task) {
    setTasks([...tasks, task]); // adds the new task to the task list
  }
  // delete function
  function handleDeleteTask(index) {
    const modTasks = [...tasks];
    modTasks.splice(index, 1);
    setTasks(modTasks);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
