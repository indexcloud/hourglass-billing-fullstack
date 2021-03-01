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
		let tableBody = this.state.contacts.map((contact, index) => {
			return (
				<tr key={index}>
					<td>{contact.id}</td>
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
						<th>First Name</th>
						<th>Last Name</th>
						<th>Company</th>
						<th>Email</th>
						<th>Phone Number</th>
						<th>Street</th>
						<th>Zip Code</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>{tableBody}</tbody>
			</Table>
		);
	}
}

export default ContactTable;
