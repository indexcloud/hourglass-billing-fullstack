import React from "react";
import BarChart from "../../components/Chart/BarChart";

class Reports extends React.Component {
	render() {
		return (
			<div>
				<button>Billable Hours</button>
				<BarChart />
			</div>
		);
	}
}

export default Reports;
