import React from "react";
import {Table} from "react-bootstrap";

class ActivityTable extends React.Component {
	render() {
		let tableBody = this.props.times.map((time, index) => {
			return (
				<tr key={index}>
					<td>{time.id}</td>
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
						<th>Date</th>
						<th>Description</th>
						<th>Duration</th>
						<th>Rate</th>
						<th>Amount</th>
						<th>Matter</th>
					</tr>
				</thead>
				<tbody>{tableBody}</tbody>
			</Table>
		);
	}
}

export default ActivityTable;
