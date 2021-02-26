import React from "react";
import BillTable from "../../components/Bill/BillTable";

class Billing extends React.Component {
	render() {
		return (
			<div>
				<button>Outstanding Balance</button>
				<button>Record Payment</button>
				<button>New Bills</button>
				<p>Draft, Pending Review, Unpaid, Paid, All</p>
				<p>Select, Actions, Status, Due, Invoice Id, Client, Issue Date, Balance, Matter(s)</p>
				<BillTable />
			</div>
		);
	}
}

export default Billing;
