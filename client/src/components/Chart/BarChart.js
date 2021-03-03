import React from "react";
import {Bar} from "react-chartjs-2";
import axios from "axios";

class BarChart extends React.Component {
	render() {
		console.log(this.props.times);

		const data = {
			labels: this.props.times.map(time => time.date),
			datasets: [
				{
					label: "Billable Hours",
					data: this.props.times.map(time => time.quantity),
					backgroundColor: this.props.times.map(
						() => "#" + Math.floor(Math.random() * 16777215).toString(16)
					),
					borderWidth: 1,
				},
			],
		};

		const options = {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		};

		return <Bar data={data} options={options} />;
	}
}

export default BarChart;
