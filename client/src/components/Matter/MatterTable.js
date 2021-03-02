import React from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

class MatterTable extends React.Component {
	render() {
		let tableBody = this.props.matters.map((matter, index) => {
			return (
				<tr key={index}>
					<td>{matter.id}</td>
					<td>{matter.description}</td>
					<td>{matter.practiceArea}</td>
					<td>{matter.clientId}</td>
				</tr>
			);
		});

		return (
			<Table responsive>
				<thead>
					<tr>
						<th>Matter Id</th>
						<th>Matter</th>
						<th>Description</th>
						<th>Practice Area</th>
						<th>Client</th>
					</tr>
				</thead>
				<tbody>{tableBody}</tbody>
			</Table>
		);
	}
}

export default MatterTable;
