import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { CalendarContext } from "../context/CalendarContext";
import { CirclePicker } from "react-color";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Form() {
  const { date, todo, setTodo, saveTodo, setDate, deleteTodo } =  useContext(CalendarContext);
  const [name, setName] = useState("");
  const [color, setColor] = useState("#f44336");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (todo) {
      setName(todo.name || "");
      setColor(todo.color || "#f44336");
    }
  }, [todo]);

  const closeModal = () => {
    setTodo(null);
    setError(false);
  };

  const _saveTodo = () => {
 
    if(name.trim().length < 1) {
        setError(true);
        return;
    }
    setError(false);

    saveTodo({
      ...todo,
      date: date,
      name: name,
      color: color,
    });
    setDate(date);
    closeModal();

  };

  const _deleteTodo = ()=> {
    deleteTodo(todo.id);
    setDate(date);
    closeModal();
    setError(false);
  }

  return (
    <Modal 
      isOpen={todo != null}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Todo Form"
    >
      <div className="todo-form">
        
        <label>Name</label>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Todo Name"/>
        <label>Color</label>

        <div>
          <CirclePicker
            color={color}
            onChange={(color) => {
              setColor(color.hex);
            }}
          />
        </div>

        <div>
          <button className="button button-red" onClick={closeModal}>
            Cancel
          </button>
          {todo && todo.id ? (
            <button
              className="button button-orange"
              onClick={_deleteTodo}
            >
              Delete
            </button>
          ) : null}
          <button
            className="button button-green"
            onClick={_saveTodo}
          >
            Save
          </button>
        </div>
        {error ? <p className="error">The name of the todo is required</p> : null}
      </div>
    </Modal>
  );
}

export default Form;