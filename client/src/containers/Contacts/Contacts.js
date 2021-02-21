import React from "react";
import Contact from "../../components/Contact/Contact";

class Contacts extends React.Component {
	render() {
		return (
			<div>
				<button>ALL</button>
				<button>People</button>
				<p>Path = contacts/new?type=person</p>
				<button>Companies</button>
				<p>Path = contacts/new?type=company</p>
				<button>New person</button>
				<button>New company</button>
				<p>Select, Actions, Contact Id, Type, Name, Phone, Email, Address</p>
				<Contact />
			</div>
		);
	}
}

export default Contacts;
