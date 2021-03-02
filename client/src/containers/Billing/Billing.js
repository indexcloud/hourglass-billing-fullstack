import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Select from "react-select";
import BillTable from "../../components/Bill/BillTable";
import Invoice from "../../components/Invoice/Invoice";

class Billing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			matters: [],
			invoices: [],
		};
	}

	getInvoices = async () => {
		await axios.get("/billing").then(res => {
			this.setState({invoices: res.data});
		});
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
				<Select />
				<button onClick={this.getInvoices}>All Invoices</button>
				<button onClick={this.newInvoiceHandler}>New Invoice</button>
				<button onClick={this.newInvoiceCancelledHandler}>Cancel New Invoice</button>
				<BillTable />
				<Route
					path={this.props.match.path + "/new"}
					render={props => <Invoice matter={this.state.matter} {...props} />}
				/>
			</div>
		);
	}
}

export default Billing;
