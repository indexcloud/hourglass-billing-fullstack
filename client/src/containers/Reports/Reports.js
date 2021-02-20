import React from "react";

class Reports extends React.Component {
	render() {
		return (
			<div>
				<h1>Billing Reports, Client Reports, Matter Reports, Attorney Reports</h1>
				<button>Attorney TimeSheet Summary, for certain period of time, export to excel, csv, pdf</button>
				<button>Matter Summary for certain period of time, export to excel, csv, pdf</button>
				<p>Chart for Attorney's time on different matters during certain period of time</p>
			</div>
		);
	}
}

export default Reports;
