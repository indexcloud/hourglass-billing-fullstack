import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		axios.get("/api").then(res => {
			console.log(res);
			return setData(res.data.message);
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{!data ? "Loading..." : data}</p>
			</header>
		</div>
	);
}

export default App;
