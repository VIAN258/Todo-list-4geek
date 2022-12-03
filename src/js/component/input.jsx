import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Input = () => {
  
  const [newTask, setNewTask] = useState([]);

  const validate = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
        setNewTask(newTask.concat(e.target.value));
    }
  };

  const deleteTask = (Task) => {
    setNewTask(prev => {
      prev.filter(li => li != Task)
    })
  }

  return (
    <input
      type="text"
      placeholder="Ingrese tarea"
      clasName="form-control"
      onChange={validate}
      onKeyDown={(e) => validate(e)}
      {
          newTask && newTask.map((task, i) => {
          return <li key= {i} className="card-text" onClick={e => deleteTask(task)}>{task}</li>
        })
      }
      
    ></input>
  );
};

export default Input;

//crear funcion validador de input si se ingresa dato o no, usar mappara recorrido en la cre<CION DE LISTA
// setNewTask((prev) => [...prev, e.target.value]);
