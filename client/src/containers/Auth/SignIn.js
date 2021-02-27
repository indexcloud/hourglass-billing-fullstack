import React from "react";

import {Redirect, NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

import classes from "./Auth.module.css";
import axios from "axios";
import Input from "../../components/UI/Input/Input";

class SignUp extends React.Component {
	state = {
		contactForm: {
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
			password: {
				elementType: "input",
				elementConfig: {
					type: "password",
					placeholder: "Password",
				},
				value: "",
				validation: {
					required: true,
					minLength: 6,
				},
				valid: false,
				touched: false,
			},
		},
		formIsValid: false,
		loading: false,
	};

	submitHandler = event => {
		event.preventDefault();
		this.setState({loading: true});
		const formData = {};
		for (let formElementIdentifier in this.state.contactForm) {
			formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
		}
		console.log(formData);
		axios
			.post("/signin", formData)
			.then(res => {
				console.log(res);
				this.setState({loading: false});
				this.props.history.push("/signin");
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
			<form onSubmit={this.submitHandler}>
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

				{/* <Button variant="success">Submit</Button> */}

				<button>Submit</button>
			</form>
		);

		return (
			<div className={classes.Auth}>
				<h4>Sign in</h4>
				{form}
				<NavLink to="/signup">
					<Button>Sign Up</Button>
				</NavLink>
			</div>
		);
	}
}

export default SignUp;
