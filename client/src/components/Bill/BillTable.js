import React from "react";
import {Table} from "react-bootstrap";

class BillTable extends React.Component {
	render() {
		return (
			<Table responsive>
				<thead>
					<tr>
						<th>Invoice Number</th>
						<th>Status</th>
						<th>Invoice Date</th>
						<th>Due Date</th>
						<th>Balance</th>
						<th>Matter</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						{Array.from({length: 5}).map((_, index) => (
							<td key={index}>Table cell {index}</td>
						))}
					</tr>
					<tr>
						<td>2</td>
						{Array.from({length: 5}).map((_, index) => (
							<td key={index}>Table cell {index}</td>
						))}
					</tr>
					<tr>
						<td>3</td>
						{Array.from({length: 5}).map((_, index) => (
							<td key={index}>Table cell {index}</td>
						))}
					</tr>
				</tbody>
			</Table>
		);
	}
}

export default BillTable;
