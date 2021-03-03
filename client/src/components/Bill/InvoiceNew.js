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
			matter: "",
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
				this.setState({matters: res.data});
			})
			.catch(err => console.log(err));
	};

	matterHandler = event => {
		event.preventDefault();
		this.setState({loading: true});
		const formData = {};
		for (let formElementIdentifier in this.state.matterForm) {
			formData[formElementIdentifier] = this.state.matterForm[formElementIdentifier].value;
		}

		formData.clientId = this.state.clientId;

		axios
			.post("/matters", formData)
			.then(res => {
				this.setState({loading: false});
				this.props.history.push("/matters");
			})
			.catch(err => {
				this.setState({loading: false});
			});
	};

	selectChangeHandler = selectedOption => {
		console.log(selectedOption.value);
		axios.get("/times/");

		this.setState({clientId: selectedOption.value});
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedMatterForm = {
			...this.state.matterForm,
		};

		const updatedFormElement = {
			...updatedMatterForm[inputIdentifier],
		};
		updatedFormElement.value = event.target.value;
		updatedMatterForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedMatterForm) {
			formIsValid = updatedMatterForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({matterForm: updatedMatterForm, formIsValid: formIsValid});
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

		return (
			<form style={{padding: 20}} onSubmit={this.invoiceHandler}>
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
						<table>
							<tr>
								<th>Invoice # :</th>
								<td>1</td>
							</tr>
							<tr>
								<th>Invoice Date :</th>
								<td>10-01-2018</td>
							</tr>
							<tr>
								<th>Due Date :</th>
								<td>10-01-2018</td>
							</tr>
						</table>
					</Col>
				</Row>

				<Row style={{marginTop: 48}}>
					<Col span={8}>
						<h3>
							Matter: <Select onChange={event => this.selectChangeHandler(event)} options={options} />
						</h3>
					</Col>
				</Row>

				<Row style={{marginTop: 48}}>
					<Table
						dataSource={[
							{
								id: 1,
								name: "Accommodation (Single Occupancy)",
								description: "Accommodation",
								rate: 1599,
								quantity: 1,
							},
							{
								id: 1,
								name: "Accommodation (Single Occupancy)",
								description: "Accommodation",
								rate: 1599,
								quantity: 1,
							},
						]}
						pagination={false}
					>
						<Table.Column title="Service" />
						<Table.Column title="Date" dataIndex="name" />
						<Table.Column title="Description" dataIndex="description" />
						<Table.Column title="Duration" dataIndex="quantity" />
						<Table.Column title="Hourly Rate" dataIndex="price" />
						<Table.Column title="Subtotal" />
					</Table>
				</Row>

				<Row style={{marginTop: 48}}>
					<Col span={8} offset={16}>
						<table>
							<tr>
								<th>Bill Total :</th>
								<td>$ 1599</td>
							</tr>
						</table>
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
