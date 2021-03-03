import React from "react";
import Select from "react-select";

import classes from "./Matter.module.css";
import axios from "axios";
import Input from "../UI/Input/Input";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: "",
			clientId: "",
			matterForm: {
				matter: {
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
	}

	componentDidMount = () => {
		axios
			.get("/contacts")
			.then(res => {
				this.setState({contacts: res.data});
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
		let persons = [];

		for (let contact of this.state.contacts) {
			const ojbec = {};
			ojbec.value = contact.id;
			ojbec.label = contact.id + " " + contact.firstName + " " + contact.lastName;
			persons.push(ojbec);
		}

		const options = [
			{
				label: "Person",
				options: persons,
			},
		];

		const formElementsArray = [];
		for (let key in this.state.matterForm) {
			formElementsArray.push({
				id: key,
				config: this.state.matterForm[key],
			});
		}

		let form = (
			<form onSubmit={this.matterHandler}>
				<Select onChange={event => this.selectChangeHandler(event)} options={options} />

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
