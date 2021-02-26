import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Matter from "../../components/Matter/Matter";
import MatterTable from "../../components/Matter/MatterTable";

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

	render() {
		return (
			<div>
				<button onClick={this.newMatterHandler}>New Matter</button>
				<button onClick={this.newMatterCancelledHandler}>Cancel</button>
				<p>Select, Actions, Matter Id, Matter, Client, Responsible Attorney, Practice area, Open Date</p>
				<MatterTable />
				<Route path={this.props.match.path + "/new"} component={Matter} />
			</div>
		);
	}
}

export default Matters;
