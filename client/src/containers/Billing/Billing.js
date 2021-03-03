import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import BillTable from "../../components/Bill/BillTable";
import InvoiceNew from "../../components/Bill/InvoiceNew";

class Billing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invoices: [],
		};
	}

	getInvoices = async () => {
		await axios
			.get("/invoices")
			.then(res => {
				console.log(res.data);
				this.setState({invoices: res.data});
			})
			.catch(err => console.log(err));
	};

	newInvoiceCancelledHandler = () => {
		this.props.history.replace("/billing/");
	};

	newInvoiceHandler = () => {
		this.props.history.replace("/billing/new");
	};

	render() {
		return (
			<div>
				<button onClick={this.getInvoices}>All Invoices</button>
				<button onClick={this.newInvoiceHandler}>New Invoice</button>
				<button onClick={this.newInvoiceCancelledHandler}>Cancel New Invoice</button>
				<BillTable invoices={this.state.invoices} />
				<Route path={this.props.match.path + "/new"} component={InvoiceNew} />
			</div>
		);
	}
}

export default Billing;
