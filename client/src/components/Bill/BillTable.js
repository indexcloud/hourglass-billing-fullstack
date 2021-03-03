import React from "react";
import {Table} from "react-bootstrap";

class BillTable extends React.Component {
	render() {
		let tableBody = this.props.invoices.map((invoice, index) => {
			return (
				<tr key={index}>
					<td>{invoice.id}</td>
					<td>{invoice.date}</td>
					<td>{invoice.description}</td>
					<td>{invoice.quantity}</td>
					<td>{invoice.rate}</td>
					<td>{invoice.amount}</td>
				</tr>
			);
		});

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
				<tbody>{tableBody}</tbody>
			</Table>
		);
	}
}

export default BillTable;
