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
			counter++
			
			
			
		}
	}

const deleteTask = (newTas) => {
	 setNewTask (prev => {prev.filter(p => p !=newTas)})
	 counter --
}
  return (
    <div className="card">
      <div className="card-body">
		<h5> Task List.</h5>
		<input type="text" className="form-control" placeholder="Enter task" onKeyDown={e => validate(e)}/> 
		<ul className="list-group">
			<li className="list-group-item">Added tasks:  {counter<1? "No Task": counter}</li>
		</ul>
		{newTask && newTask.map ((newTas) => {
              return <ul className="list-group">
			               <li key={newTas.toString} onClick ={() => deleteTask(newTas.toString)}  className="list-group-item">{newTas}  <button type="button" class="btn-close" aria-label="Close"></button></li>
					 </ul>	  
		})
		}
	  </div>
    </div>
  );
};

export default Home;
