import React from "react";
import { useState, useEffect } from "react";
//include images into your bundle

//create your first component



let counter =0;
const Home = () => {

	const [newTask, setNewTask] = useState([])
	const validate = (e) => {
		if(e.key ==='Enter'){
			setNewTask(prev => [...prev, e.target.value])
			counter++;
			
			
		}
	}
  return (
    <div className="card">
      <div className="card-body">
		<h5>List Tasks.</h5>
		<input type="text"  className="form-control" placeholder="Enter tasks" onKeyDown={e => validate(e)}/> 
		<h4>Added tasks:{counter}</h4>
		{newTask.map ((newTask) => {
              return <ul className="list-group">
			               <li className="list-group-item">{newTask}</li>
					 </ul>	  
		})
		}
	  </div>
    </div>
  );
};

export default Home;
