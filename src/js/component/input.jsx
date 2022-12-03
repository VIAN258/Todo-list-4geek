import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Input = () => {

        const [input, setInput ] = React.useState({
               tareas:''

      });

        const handleInputChange = (e) => {
                console.log(e.target.value)
                setInput({
                        ...input,
                        [e.target.name] :  e.target.name
                })

        }
                
	return (
        
            <input 
            type="text"
            placeholder="Ingrese tarea"
            clasName= "form-control"
            name="tareas"
            onChange={handleInputChange}
            onKeyDown={e =>handleInputChange(e)}
            ></input>
            
	);
};

export default Input;

