import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Input = () => {
  const [task, setTask] = React.useState("");
  const [newTask, setNewTask] = React.useState(['']);

  const validate = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
        console.log(e.target.value);
        setNewTask(newTask.concat(e.target.value));
     // setNewTask((prev) => [...prev, e.target.value]);
      console.log(newTask);
    }
  };
  //const handleInputChange = (e) => {
  // setTask(e.target.value)
  //console.log(task)

  // }
  return (
    <input
      type="text"
      placeholder="Ingrese tarea"
      clasName="form-control"
      onChange={validate}
      onKeyDown={(e) => validate(e)}
      value
    ></input>
  );
};

export default Input;

//crear funcion validador de input si se ingresa dato o no, usar mappara recorrido en la cre<CION DE LISTA
