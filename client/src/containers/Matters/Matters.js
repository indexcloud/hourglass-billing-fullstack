import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import MatterNew from "../../components/Matter/MatterNew";
import MatterTable from "../../components/Matter/MatterTable";

class Matters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			matters: [],
		};
	}

	getMatters = async () => {
		await axios
			.get("/matters")
			.then(res => {
				console.log(res.data);
				this.setState({matters: res.data});
			})
			.catch(err => console.log(err));
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
				<button onClick={this.getMatters}>All Matters</button>
				<button onClick={this.newMatterHandler}>New Matter</button>
				<button onClick={this.newMatterCancelledHandler}>Cancel</button>
				<MatterTable matters={this.state.matters} />
				<Route path={this.props.match.path + "/new"} component={MatterNew} />
			</div>
		);
	}
}

export default Matters;
