import React from "react";

function Task({ text, category, onDelete }) {

  // function that handles onDelete event
  function handleDelete() {
    onDelete(); // invokes the onDelete function when delete button is clicked
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
