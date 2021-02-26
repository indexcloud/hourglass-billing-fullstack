import React from "react";
import {Redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";

import Input from "../../components/UI/Input/Input";
import classes from "./Auth.module.css";

class Auth extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			controls: {
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
			isSignup: false,
		};
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
				touched: true,
			},
		};
		this.setState({controls: updatedControls});
	};

	submitHandler = event => {
		event.preventDefault();
		this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
	};

	switchAuthModeHandler = () => {
		this.setState(prevState => {
			return {isSignup: !prevState.isSignup};
		});
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key],
			});
		}

		let form = formElementsArray.map(formElement => (
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
		));

		let errorMessage = null;

		if (this.props.error) {
			errorMessage = <p>{this.props.error.message}</p>;
		}

		let authRedirect = null;
		if (this.props.isAuthenticated) {
			authRedirect = <Redirect to={this.props.authRedirectPath} />;
		}

		return (
			<div className={classes.Auth}>
				{authRedirect}
				{errorMessage}
				<form onSubmit={this.submitHandler}>
					{form}
					<Button variant="success">Signin</Button>{" "}
				</form>
				<Button clicked={this.switchAuthModeHandler}>
					SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
				</Button>
			</div>
		);
	}
}

export default Auth;
