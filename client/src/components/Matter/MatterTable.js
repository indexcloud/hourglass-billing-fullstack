import React from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

class MatterTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			matters: [],
		};
	}

	componentDidMount() {
		console.log("Matters Working");
		axios.get("/matters").then(res => {
			console.log(res.data);
			this.setState({matters: res.data});
		});
	}

	render() {
		let tableBody = this.state.matters.map((matter, index) => {
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
