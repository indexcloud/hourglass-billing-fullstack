import React from "react";
import Select from "react-select";

import classes from "./Matter.module.css";
import axios from "axios";
import Input from "../UI/Input/Input";

const groupStyles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
};
// const groupBadgeStyles = {
// 	backgroundColor: "#EBECF0",
// 	borderRadius: "2em",
// 	color: "#172B4D",
// 	display: "inline-block",
// 	fontSize: 12,
// 	fontWeight: "normal",
// 	lineHeight: "1",
// 	minWidth: 1,
// 	padding: "0.16666666666667em 0.5em",
// 	textAlign: "center",
// };

class Contact extends React.Component {
	state = {
		contacts: "",
		matterForm: {
			matter: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Matter Number",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			description: {
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
			practiceArea: {
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

	componentDidMount = () => {
		console.log("Hello");
		axios.get("/contacts").then(res => {
			this.setState({contacts: res.data});
		});
	};

	matterHandler = event => {
		event.preventDefault();
		this.setState({loading: true});
		const formData = {};
		for (let formElementIdentifier in this.state.matterForm) {
			formData[formElementIdentifier] = this.state.matterForm[formElementIdentifier].value;
		}
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
		console.log(this.state.contacts);
		let contacts = [];
		for (let contact of this.state.contacts) {
			const ojbec = {};
			ojbec.value = contact.contactId;
			ojbec.label = contact.firstName + " " + contact.lastName;
			contacts.push(ojbec);
		}
		console.log(contacts);
		const groupedOptions = [
			{
				label: "Person",
				// options: [
				// 	{value: "ocean", label: "Ocean"},
				// 	{value: "blue", label: "Blue"},
				// ],
				options: contacts,
			},
			{
				label: "Company",
				options: [
					{value: "vanilla", label: "Vanilla"},
					{value: "chocolate", label: "Chocolate"},
				],
			},
		];

		const formatGroupLabel = data => (
			<div style={groupStyles}>
				<span>{data.label}</span>
				{/* <span style={groupBadgeStyles}>{data.options.length}</span> */}
			</div>
		);

		const formElementsArray = [];
		for (let key in this.state.matterForm) {
			formElementsArray.push({
				id: key,
				config: this.state.matterForm[key],
			});
		}
		let form = (
			<form onSubmit={this.matterHandler}>
				<Select options={groupedOptions} formatGroupLabel={formatGroupLabel} />
				{formElementsArray.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						invalid={!formElement.config.valid}
						shouldValidate={formElement.config.validation}
						touched={formElement.config.touched}
						changed={event => this.inputChangedHandler(event, formElement.id)}
						label={formElement.config.elementConfig.placeholder}
					/>
				))}
				<button>Save Matter</button>
			</form>
		);

		return (
			<div className={classes.MatterData}>
				<h4>New Matter</h4>
				{form}
			</div>
		);
	}
}

export default Contact;
