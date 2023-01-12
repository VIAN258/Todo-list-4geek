import React from "react";
import { useState } from "react";
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
	 setNewTask (newTask.filter(p => p !=newTas))
	 counter --
}
  return (
	<div className="container">
		<div className="card">
		<div className="card-body">
			<h5> Task List.</h5>
			<input  type="text" className="form-control" placeholder="Enter task" onKeyDown={e => validate(e)}/> 
			<p></p>
			<ul className="list-group" >
				<li id="first" className="list-group-item"> Added tasks:  {counter<1? "No Tasks, add task": counter}</li><p></p>
			</ul>
			{newTask && newTask.map ((newTas) => {
				return <ul className="list-group">
							<li key={newTas.toString()} onClick ={() => deleteTask(newTas.toString())}  className="list-group-item">{newTas}  <button  type="button" class="btn-close" aria-label="Close"></button></li><p></p>
						</ul>	  
			})
			}
		</div>
		</div>
	</div>
  );
};

export default Home;
