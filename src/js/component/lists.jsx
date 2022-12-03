import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";




//create your first component
const Lists = () => {
	return (
        <div className="card" style={{width: "18rem"}}>
            <div class="card-header">
                Tasks List
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"></li>
            </ul>
        </div>
	);
};

export default Lists;