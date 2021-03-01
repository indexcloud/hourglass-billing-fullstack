import React from "react";
import {Route} from "react-router-dom";
import Contact from "../../components/Contact/Contact";
import ContactTable from "../../components/Contact/ContactTable";

class Contacts extends React.Component {
	newContactCancelledHandler = () => {
		this.props.history.replace("/contacts/");
	};

	newContactHandler = () => {
		this.props.history.replace("/contacts/new");
	};

	render() {
		return (
			<div>
				{/* <p>Path = contacts/new?type=person</p>
				<p>Path = contacts/new?type=company</p> */}
				<button onClick={this.newContactHandler}>New Contact</button>
				<button onClick={this.newContactCancelledHandler}>Cancel</button>
				<ContactTable />
				<Route path={this.props.match.path + "/new"} component={Contact} />
			</div>
		);
	}
}

export default Contacts;
