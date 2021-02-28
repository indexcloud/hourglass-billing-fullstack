import React from "react";

import {Redirect, NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";

import classes from "./Auth.module.css";
import axios from "axios";
import Input from "../../components/UI/Input/Input";

class SignUp extends React.Component {
	state = {
		signUpForm: {
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
					minLength: 5,
				},
				valid: false,
				touched: false,
			},
			confirmPassword: {
				elementType: "input",
				elementConfig: {
					type: "password",
					placeholder: "Confirm Password",
				},
				value: "",
				validation: {
					required: true,
					minLength: 5,
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
		for (let formElementIdentifier in this.state.signUpForm) {
			formData[formElementIdentifier] = this.state.signUpForm[formElementIdentifier].value;
		}
		console.log(formData);
		axios
			.post("/signup", formData)
			.then(res => {
				this.setState({loading: false});
				<Redirect to={"/"} />;
			})
			.catch(err => {
				this.setState({loading: false});
			});
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedSignUpForm = {
			...this.state.signUpForm,
		};

		const updatedFormElement = {
			...updatedSignUpForm[inputIdentifier],
		};
		updatedFormElement.value = event.target.value;
		updatedSignUpForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedSignUpForm) {
			formIsValid = updatedSignUpForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({signUpForm: updatedSignUpForm, formIsValid: formIsValid});
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.signUpForm) {
			formElementsArray.push({
				id: key,
				config: this.state.signUpForm[key],
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

				<Button type="submit" variant="success">
					Submit
				</Button>
			</form>
		);

		return (
			<div className={classes.Auth}>
				<h4>Sign Up</h4>
				{form}
			</div>
		);
	}
}

export default SignUp;
