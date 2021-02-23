import React from "react";

import classes from "./Matter.module.css";
import axios from "axios";
import Input from "../UI/Input/Input";

class Contact extends React.Component {
	state = {
		matterForm: {
			matter: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Matter",
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
					placeholder: "Description",
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
			clientID: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Client",
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

	matterHandler = event => {
		event.preventDefault();
		this.setState({loading: true});
		const formData = {};
		for (let formElementIdentifier in this.state.matterForm) {
			formData[formElementIdentifier] = this.state.matterForm[formElementIdentifier].value;
		}
		axios
			.post("/contacts", formData)
			.then(res => {
				this.setState({loading: false});
				this.props.history.push("/contacts");
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
		const formElementsArray = [];
		for (let key in this.state.matterForm) {
			formElementsArray.push({
				id: key,
				config: this.state.matterForm[key],
			});
		}
		let form = (
			<form onSubmit={this.matterHandler}>
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
