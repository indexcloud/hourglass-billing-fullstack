import React from "react";

import classes from "./Contact.module.css";
import axios from "axios";
import Input from "../UI/Input/Input";

class Contact extends React.Component {
	state = {
		contactForm: {
			firstName: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "First Name",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			lastName: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Last Name",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			company: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Company",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			email: {
				elementType: "input",
				elementConfig: {
					type: "email",
					placeholder: "Email",
				},
				value: "",
				validation: {
					required: true,
					isEmail: true,
				},
				valid: false,
				touched: false,
			},
			phone: {
				elementType: "input",
				elementConfig: {
					type: "number",
					placeholder: "Phone Number",
				},
				value: "",
				validation: {
					required: true,
					isNumeric: true,
				},
				valid: false,
				touched: false,
			},
			street: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Street",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			city: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "City",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			zipCode: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Zip/Postal code",
				},
				value: "",
				validation: {
					required: true,
					minLength: 5,
					maxLength: 5,
					isNumeric: true,
				},
				valid: false,
				touched: false,
			},
			country: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Country",
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

	contactHandler = event => {
		event.preventDefault();
		this.setState({loading: true});
		const formData = {};
		for (let formElementIdentifier in this.state.contactForm) {
			formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
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
		const updatedContactForm = {
			...this.state.contactForm,
		};

		const updatedFormElement = {
			...updatedContactForm[inputIdentifier],
		};
		updatedFormElement.value = event.target.value;
		updatedContactForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedContactForm) {
			formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({contactForm: updatedContactForm, formIsValid: formIsValid});
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.contactForm) {
			formElementsArray.push({
				id: key,
				config: this.state.contactForm[key],
			});
		}
		let form = (
			<form onSubmit={this.contactHandler}>
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
				<button>Save contact</button>
			</form>
		);

		return (
			<div className={classes.ContactData}>
				<h4>New Contact</h4>
				{form}
			</div>
		);
	}
}

export default Contact;
