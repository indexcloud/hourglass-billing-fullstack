import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import ContactNew from "../../components/Contact/ContactNew";
import ContactTable from "../../components/Contact/ContactTable";

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
		};
	}

	getContacts = async () => {
		await axios
			.get("/contacts")
			.then(res => {
				console.log(res.data);
				this.setState({contacts: res.data});
			})
			.catch(err => console.log(err));
	};

	newContactCancelledHandler = () => {
		this.props.history.replace("/contacts/");
	};

	newContactHandler = () => {
		this.props.history.replace("/contacts/new");
	};

	render() {
		return (
			<div>
				<button onClick={this.getContacts}>All Contacts</button>
				<button onClick={this.newContactHandler}>New Contact</button>
				<button onClick={this.newContactCancelledHandler}>Cancel</button>
				<ContactTable contacts={this.state.contacts} />
				<Route path={this.props.match.path + "/new"} component={ContactNew} />
			</div>
		);
	}
}

export default Contacts;
