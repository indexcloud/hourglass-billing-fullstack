import React from "react";
import axios from "axios";

class Matters extends React.Component {
	state = {
		data: null,
	};

	componentDidMount() {
		axios.get("/matters").then(res => {
			console.log(res);
			return this.setState({data: res.data.message});
		});
	}

	render() {
		return (
			<div>
				<button>All Matters</button>
				<button>New matter</button>
				<p>{!this.state.data ? "Loading..." : this.state.data}</p>
				<p>Select, Actions, Matter Id, Matter, Client, Responsible Attorney, Practice area, Open Date</p>
			</div>
		);
	}
}

export default Matters;
