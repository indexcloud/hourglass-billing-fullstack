import React from "react";
import axios from "axios";
import Select from "react-select";
import Input from "../UI/Input/Input";

// import {Table} from "react-bootstrap";

import {Col, Divider, Row, Table} from "antd";
import "antd/dist/antd.css";

class Invoice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			matters: [],
			times: [],
			matterId: "",
			invoiceForm: {
				id: {
					elementType: "input",
					elementConfig: {
						type: "text",
						placeholder: "Matter Name",
					},
					value: "",
					validation: {
						required: true,
					},
					valid: false,
					touched: false,
				},
				invoiceDate: {
					elementType: "input",
					elementConfig: {
						type: "text",
						placeholder: "Matter Description",
					},
					value: "",
					validation: {
						required: true,
					},
					valid: false,
					touched: false,
				},
				dueDate: {
					elementType: "input",
					elementConfig: {
						type: "text",
						placeholder: "Practice Area",
					},
					value: "",
					validation: {
						required: true,
					},
					valid: false,
					touched: false,
				},
				balance: {
					elementType: "input",
					elementConfig: {
						type: "text",
						placeholder: "Practice Area",
					},
					value: "",
					validation: {
						required: true,
					},
					valid: false,
					touched: false,
				},
			},
			formIsValid: false,
			loading: false,
		};
	}

	componentDidMount = () => {
		axios
			.get("/matters")
			.then(res => {
				console.log(res.data);
				this.setState({matters: res.data});
			})
			.catch(err => console.log(err));

		axios
			.get("/activities/times")
			.then(res => {
				console.log(res.data);
				this.setState({times: res.data});
			})
			.catch(err => {
				console.log(err);
			});
	};

	invoiceHandler = event => {
		event.preventDefault();
		this.setState({loading: true});
		const formData = {};
		for (let formElementIdentifier in this.state.invoiceForm) {
			formData[formElementIdentifier] = this.state.invoiceForm[formElementIdentifier].value;
		}

		formData.matterId = this.state.matterId;

		axios
			.post("/billing", formData)
			.then(res => {
				this.setState({loading: false});
				this.props.history.push("/billing");
			})
			.catch(err => {
				this.setState({loading: false});
			});
	};

	selectChangeHandler = selectedOption => {
		console.log(selectedOption.value);

		this.setState({matterId: selectedOption.value});
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedInvoiceForm = {
			...this.state.invoiceForm,
		};

		const updatedFormElement = {
			...updatedInvoiceForm[inputIdentifier],
		};
		updatedFormElement.value = event.target.value;
		updatedInvoiceForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedInvoiceForm) {
			formIsValid = updatedInvoiceForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({InvoiceForm: updatedInvoiceForm, formIsValid: formIsValid});
	};

	render() {
		let matters = [];

		for (let matter of this.state.matters) {
			const ojbec = {};
			ojbec.value = matter.id;
			ojbec.label = matter.id + " " + matter.matter;
			matters.push(ojbec);
		}

		const options = [
			{
				label: "Matter",
				options: matters,
			},
		];

		let matterTime = [];

		let timeTotal = 0;

		for (let time of this.state.times) {
			if (time.matterId == this.state.matterId) {
				time.subtotal = time.quantity * time.rate;
				timeTotal = timeTotal + time.subtotal;
				matterTime.push(time);
			}
		}

		let today = new Date();
		let dd = String(today.getDate()).padStart(2, "0");
		let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
		let yyyy = today.getFullYear();

		today = mm + "/" + dd + "/" + yyyy;

		return (
			<form style={{padding: 20, width: "50%"}} onSubmit={this.invoiceHandler}>
				<Row>
					<Col>
						<Divider>Invoice</Divider>
					</Col>
				</Row>

				<Row gutter={24} style={{marginTop: 32}}>
					<Col span={8}>
						<h3>ABC Law Firm</h3>
						<div>312 Main Street Suit 100</div>
						<div>Houston</div>
						<div>Texas 77077</div>
					</Col>
					<Col span={8} offset={8}>
						<div style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
							<div>Invoice Number: 001</div>
							<div>Invoice Date : {today}</div>
							<div>Due upon receipt</div>
						</div>
					</Col>
				</Row>

				<Row style={{marginTop: 48}}>
					<Col span={8}>
						<h3>
							Bill to Matter:{" "}
							<Select onChange={event => this.selectChangeHandler(event)} options={options} />
						</h3>
					</Col>
				</Row>

				<Row style={{marginTop: 48}}>
					<Table dataSource={matterTime} pagination={false}>
						<Table.Column title="Service" />
						<Table.Column title="Date" dataIndex="date" />
						<Table.Column title="Description" dataIndex="description" />
						<Table.Column title="Duration" dataIndex="quantity" />
						<Table.Column title="Hourly Rate" dataIndex="rate" />
						<Table.Column title="Subtotal" dataIndex="subtotal" />
					</Table>
				</Row>

				<Row style={{marginTop: 48}}>
					<Col span={8} offset={16}>
						<div>
							<strong>Bill total: ${timeTotal}</strong>
						</div>
					</Col>
				</Row>

				<Row style={{marginTop: 48, textAlign: "right"}}>
					<button>Save Invoice</button>
				</Row>
			</form>
		);
	}
}

export default Invoice;
