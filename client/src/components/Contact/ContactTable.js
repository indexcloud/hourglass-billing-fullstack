import React from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

class ContactTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
		};
	}

	componentDidMount() {
		console.log("Contacts Working");
		axios.get("/contacts").then(res => {
			console.log(res.data);
			this.setState({contacts: res.data});
		});
	}

	render() {
		let contactBody = this.state.contacts.map((contact, index) => {
			return (
				<tr key={index}>
					<td>{contact.contactId}</td>
					{/* {Array.from({length: 12}).map((_, index) => (
						<td key={index}>{contact.description}</td>
					))} */}
					<td>{contact.firstName}</td>
					<td>{contact.lastName}</td>
					<td>{contact.company}</td>
					<td>{contact.email}</td>
					<td>{contact.phone}</td>
					<td>{contact.street}</td>
					<td>{contact.zipCode}</td>
					<td>{contact.country}</td>
				</tr>
			);
		});

		return (
			<Table responsive>
				<thead>
					<tr>
						<th>Client Id</th>
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
					</tr>  */}
					{contactBody}
				</tbody>
			</Table>
		);
	}
}

export default ContactTable;
