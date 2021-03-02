import React from "react";
import axios from "axios";
import BarChart from "../../components/Chart/BarChart";

class Reports extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			times: [],
		};
	}

	getTimes = async () => {
		await axios.get("/activities/times").then(res => {
			console.log(res.data);
			this.setState({times: res.data});
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.getTimes}>Billable Hours</button>
				<BarChart times={this.state.times} />
			</div>
		);
	}
}

export default Reports;
