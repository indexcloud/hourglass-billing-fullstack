import React from "react";
import {Bar} from "react-chartjs-2";
import axios from "axios";

class BarChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			times: [],
		};
	}

	componentDidMount() {
		console.log("Times received");
		axios.get("/activities/times").then(res => {
			console.log(res.data);
			this.setState({times: res.data});
		});
	}

	render() {
		const data = {
			labels: this.state.times.map(time => time.date),
			datasets: [
				{
					label: "Billable Hours",
					data: this.state.times.map(time => time.quantity),
					backgroundColor: this.state.times.map(
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
