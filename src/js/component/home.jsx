import React, { useState } from "react";

//include images into your bundle

//create your first component

const Home = () => {
	const [color, setColor] = useState("");

	//setColor authenticated ? renderApp() : renderLogin();

	return (
		//change className depending on buttonColor value
		<div className="container">
			<div className="traffic">
				<div
					className={color === "red" ? "red redOff" : "redOff"}
					onClick={() => {
						setColor("red");
					}}></div>
				<div
					className={
						color === "yellow" ? "yellow yellowOff" : "yellowOff"
					}
					onClick={() => {
						setColor("yellow");
					}}></div>
				<div
					className={
						color === "green" ? "green greenOff" : "greenOff"
					}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</div>
	);
};

export default Home;
