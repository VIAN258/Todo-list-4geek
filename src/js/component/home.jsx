import React from "react";

//include images into your bundle
import Lists from "./lists.jsx";
import Input from "./input.jsx";

//create your first component
const Home = () => {
	return (
	<div className="container">
		
		<Input/>
		<Lists/>
				
	</div>
	);
};

export default Home;



