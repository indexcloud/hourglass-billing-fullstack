import axios from "axios";
import React from "react";
import {Route} from "react-router-dom";
import Select from "react-select";
import BillTable from "../../components/Bill/BillTable";
import Invoice from "../../components/Invoice/Invoice";

class Billing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			matters: "",
			invoices: "",
		};
	}

	componentDidMount() {
		axios.get("/matters").then(res => {
			console.log(res.data);
			this.setState({times: res.data});
		});
		axios.get("/billing").then(res => {
			this.setState({times: res.data});
		});
	}

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
