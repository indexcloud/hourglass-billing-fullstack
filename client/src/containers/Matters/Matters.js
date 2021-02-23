import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Matter from "../../components/Matter/Matter";

class Matters extends React.Component {
	state = {
		data: null,
	};

	newMatterCancelledHandler = () => {
		this.props.history.replace("/matters/");
	};

	newMatterHandler = () => {
		this.props.history.replace("/matters/new");
	};

	// componentDidMount() {
	// 	axios.get("/matters").then(res => {
	// 		console.log(res);
	// 		return this.setState({data: res.data.message});
	// 	});
	// }

	render() {
		return (
			<div>
				<button>All Matters Table</button>
				<button onClick={this.newMatterHandler}>New Matter</button>
				<button onClick={this.newMatterCancelledHandler}>Cancel</button>
				{/* <p>{!this.state.data ? "Loading..." : this.state.data}</p> */}
				<p>Select, Actions, Matter Id, Matter, Client, Responsible Attorney, Practice area, Open Date</p>
				<Route path={this.props.match.path + "/new"} component={Matter} />
			</div>
		);
	}
}

export default Matters;
