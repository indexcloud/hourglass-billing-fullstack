import React from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

class ActivityTable extends React.Component {
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
		console.log(this.state.times);
		let timesBody = this.state.times.map((time, index) => {
			return (
				<tr key={index}>
					<td>{time.id}</td>
					{/* {Array.from({length: 12}).map((_, index) => (
						<td key={index}>{matter.description}</td>
					))} */}
					<td>{time.date}</td>
					<td>{time.description}</td>
					<td>{time.quantity}</td>
					<td>{time.rate}</td>
					<td>{time.amount}</td>
				</tr>
			);
		});

		return (
			<Table responsive>
				<thead>
					<tr>
						<th>Time Id</th>
						{Array.from({length: 12}).map((_, index) => (
							<th key={index}>Table heading</th>
						))}
					</tr>
				</thead>
				<tbody>
					{/* <tr>
						<td>1</td>
						{Array.from({length: 12}).map((_, index) => (
							<td key={index}>Table cell {index}</td>
						))}
					</tr>
					<tr>
						<td>2</td>
						{Array.from({length: 12}).map((_, index) => (
							<td key={index}>Table cell {index}</td>
						))}
					</tr>
					<tr>
						<td>3</td>
						{Array.from({length: 12}).map((_, index) => (
							<td key={index}>Table cell {index}</td>
						))}
					</tr> */}
					{timesBody}
				</tbody>
			</Table>
		);
	}
}

export default ActivityTable;
