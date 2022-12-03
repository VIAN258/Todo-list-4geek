import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Input = () => {

        const [input, setInput ] = React.useState('');
        
        const validateInput = (e) => {

          console.log(e.key)}  

          //if(input === "") alert("Writte a task");
          //else alert("Good");}
	return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Task" aria-label="Task" aria-describedby="basic-addon2" value ={input}
            onKeyDown={e=>validateInput(e)} onChange={e=>setInput(e.target.value)}/>
            <span className="input-group-text" id="basic-addon2">Input tasks</span>
        </div>
        
	);
};

export default Input;

