import React from "react";
import axios from "axios";

class Matters extends React.Component {
	state = {
		data: null,
	};

	componentDidMount() {
		axios.get("/api").then(res => {
			console.log(res);
			return this.setState({data: res.data.message});
		});
	}

	render() {
		return (
			<div>
				<header className="App-header">
					<p>{!this.state.data ? "Loading..." : this.state.data}</p>
				</header>
			</div>
		);
	}
}

export default Matters;
