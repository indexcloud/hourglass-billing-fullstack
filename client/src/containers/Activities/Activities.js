import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import TimeNew from "../../components/Activity/TimeNew";
import ActivityTable from "../../components/Activity/ActivityTable";

class Activities extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			times: [],
		};
	}

	getActivities = async () => {
		await axios
			.get("/activities/times")
			.then(res => {
				console.log(res.data);
				this.setState({times: res.data});
			})
			.catch(err => console.log(err));
	};

	newTimeCancelledHandler = () => {
		this.props.history.replace("/activities/");
	};

	newTimeHandler = () => {
		this.props.history.replace("/activities/new-time");
	};

	render() {
		return (
			<div>
				<button onClick={this.getActivities}>All Times</button>
				<button onClick={this.newTimeHandler}>New Time Entry</button>
				<button onClick={this.newTimeCancelledHandler}>Cancel Time Entry</button>
				<ActivityTable times={this.state.times} />
				<Route path={this.props.match.path + "/new-time"} component={TimeNew} />
			</div>
		);
	}
}

export default Activities;
