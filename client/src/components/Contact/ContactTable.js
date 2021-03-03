import React from "react";
import {Table} from "react-bootstrap";

class ContactTable extends React.Component {
	render() {
		let tableBody = this.props.contacts.map((contact, index) => {
			return (
				<tr key={index}>
					<td>{contact.id}</td>
					<td>{contact.firstName}</td>
					<td>{contact.lastName}</td>

					<td>{contact.email}</td>
					<td>{contact.phone}</td>
					<td>{contact.street}</td>
					<td>{contact.zipCode}</td>
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

						<th>Email</th>
						<th>Phone Number</th>
						<th>Street</th>
						<th>Zip Code</th>
					</tr>
				</thead>
				<tbody>{tableBody}</tbody>
			</Table>
		);
	}
}

export default ContactTable;
