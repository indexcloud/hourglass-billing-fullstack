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
		console.log("Working");
		axios.get("/matters").then(res => {
			console.log(res.data);
			this.setState({matters: res.data});
		});
	}

	render() {
		console.log(this.state.matters);

		let matterBody = this.state.matters.map((matter, index) => {
			return (
				<tr key={index}>
					<td>{matter.matterId}</td>
					{/* {Array.from({length: 12}).map((_, index) => (
						<td key={index}>{matter.description}</td>
					))} */}
					<td>{matter.description}</td>
					<td>{matter.practiceArea}</td>
				</tr>
			);
		});

		return (
			<Table responsive>
				<thead>
					<tr>
						<th>#</th>
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
					{matterBody}
				</tbody>
			</Table>
		);
	}
}

export default MatterTable;
