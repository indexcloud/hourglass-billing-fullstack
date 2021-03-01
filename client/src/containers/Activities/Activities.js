import React from "react";
import {Route} from "react-router-dom";
import Time from "../../components/Activity/Time/Time";
import ActivityTable from "../../components/Activity/ActivityTable";

class Activities extends React.Component {
	newTimeCancelledHandler = () => {
		this.props.history.replace("/activities/");
	};

	newTimeHandler = () => {
		this.props.history.replace("/activities/new-time");
	};

	render() {
		return (
			<div>
				<button onClick={this.newTimeHandler}>New Time Entry</button>
				<button onClick={this.newTimeCancelledHandler}>Cancel Time Entry</button>
				<ActivityTable />
				<Route path={this.props.match.path + "/new-time"} component={Time} />
			</div>
		);
	}
}

export default Activities;
