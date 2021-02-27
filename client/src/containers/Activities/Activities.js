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

	newExpenseCancelledHandler = () => {
		this.props.history.replace("/activities/");
	};

	newExpenseHandler = () => {
		this.props.history.replace("/activities/new-expense");
	};

	render() {
		return (
			<div>
				<div>Duration, Time, Matter, Description, Date, Attorney, Rate</div>
				<button>Time</button>
				<button onClick={this.newTimeHandler}>New Time Entry</button>
				<button onClick={this.newTimeCancelledHandler}>Cancel Time Entry</button>
				<ActivityTable />
				<Route path={this.props.match.path + "/new-time"} component={Time} />
			</div>
		);
	}
}

export default Activities;
