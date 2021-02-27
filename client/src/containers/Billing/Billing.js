import React from "react";
import BillTable from "../../components/Bill/BillTable";

class Billing extends React.Component {
	render() {
		return (
			<div>
				<button>Record Payment</button>
				<button>New Invoice Dashboard</button>
				<p>Select, Actions, Status, Due, Invoice Id, Client, Issue Date, Balance, Matter(s)</p>
				<BillTable />
			</div>
		);
	}
}

export default Billing;
