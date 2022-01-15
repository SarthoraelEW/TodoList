import React, { useState } from "react";

const NewTask = () => {
  const [newTask, setNewTask] = useState("");
  const [importance, setImportance] = useState("None");
  const [participants, setParticipants] = useState([]);
  const [newParticipant, setNewParticipant] = useState("");
  const [showingPopupForm, setShowingPopupForm] = useState(false);

  const addParticipant = (newParticipants) => {
    const p = participants;
    p.push(newParticipants);
    setParticipants(newParticipants);
  };

  const removeParticipant = (index) => {
    let p = participants;
    p = p.splice(index, 1);
    setParticipants(p);
  };

  const showPopupForm = () => {
    const form = document.getElementById("popup-form");
    if (showingPopupForm) {
      form.classList.add("hidden");
      setShowingPopupForm(false);
    } else {
      form.classList.remove("hidden");
      setShowingPopupForm(true);
    }
  };

  return (
    <div className="new-task-container">
      <input
        type="text"
        id="new-task-input"
        name="new-task-input"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <label>Importance</label>
      <select
        value={importance}
        onChange={(e) => setImportance(e.target.value)}
      >
        <option value={"None"}>None</option>
        <option value={"High"}>High</option>
        <option value={"Medium"}>Medium</option>
        <option value={"Low"}>Low</option>
      </select>
      <label>Participants</label>
      <ul className="participants">
        {participants.map((participant, index) => {
          return (
            <li>
              <h5>{participant}</h5>
              <span
                className="material-icons-outlined"
                onClick={() => removeParticipant(index)}
              >
                close
              </span>
            </li>
          );
        })}
        <span className="material-icons-outlined" onClick={showPopupForm}>
          add
        </span>
        <div id="popup-form" className="hidden">
          <label>New participant:</label>
          <input
            type="text"
            name="new-participant"
            id="new-participant"
            value={newParticipant}
            onChange={(e) => setNewParticipant(e.target.value)}
          />
          <button onClick={() => addParticipant(newParticipant)}>
            Add participant
          </button>
        </div>
      </ul>
      <button>Add new task</button>
    </div>
  );
};

export default NewTask;
