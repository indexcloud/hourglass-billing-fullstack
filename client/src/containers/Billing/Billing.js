import React from "react";
import {Route} from "react-router-dom";
import BillTable from "../../components/Bill/BillTable";
import Invoice from "../../components/Invoice/Invoice";

class Billing extends React.Component {
	newInvoiceCancelledHandler = () => {
		this.props.history.replace("/billing/");
	};

	newInvoiceHandler = () => {
		this.props.history.replace("/billing/new");
	};

	render() {
		return (
			<div>
				<button onClick={this.newInvoiceHandler}>New Invoice</button>
				<button onClick={this.newInvoiceCancelledHandler}>Cancel New Invoice</button>
				<p>Select, Actions, Status, Due, Invoice Id, Client, Issue Date, Balance, Matter(s)</p>
				<BillTable />
				<Route path={this.props.match.path + "/new"} component={Invoice} />
			</div>
		);
	}
}

export default Billing;
