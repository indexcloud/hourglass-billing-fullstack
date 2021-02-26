import React from "react";

import classes from "./Expense.module.css";
import axios from "axios";
import Input from "../../UI/Input/Input";

class Expense extends React.Component {
	state = {
		expenseForm: {
			user: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "User",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			matter: {
				elementType: "input",
				elementConfig: {
					type: "text",
					placeholder: "Matter",
				},
				value: "",
				validation: {
					required: true,
					isEmail: true,
				},
				valid: false,
				touched: false,
			},
			date: {
				elementType: "input",
				elementConfig: {
					type: "date",
					placeholder: "Date",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			description: {
				elementType: "textarea",
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
			quantity: {
				elementType: "input",
				elementConfig: {
					type: "number",
					placeholder: "Quantity",
				},
				value: "",
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			rate: {
				elementType: "input",
				elementConfig: {
					type: "number",
					placeholder: "Rate",
				},
				value: "",
				validation: {
					required: true,
					isNumeric: true,
				},
				valid: false,
				touched: false,
			},
			totalAmount: {
				elementType: "input",
				elementConfig: {
					type: "number",
					placeholder: "Total Amount",
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
		for (let formElementIdentifier in this.state.expenseForm) {
			formData[formElementIdentifier] = this.state.expenseForm[formElementIdentifier].value;
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
		const updatedExpenseForm = {
			...this.state.expenseForm,
		};

		const updatedFormElement = {
			...updatedExpenseForm[inputIdentifier],
		};
		updatedFormElement.value = event.target.value;
		updatedExpenseForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedExpenseForm) {
			formIsValid = updatedExpenseForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({expenseForm: updatedExpenseForm, formIsValid: formIsValid});
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.expenseForm) {
			formElementsArray.push({
				id: key,
				config: this.state.expenseForm[key],
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
						label={formElement.config.elementConfig.placeholder}
					/>
				))}
				<button>Save Expense Entry</button>
			</form>
		);

		return (
			<div className={classes.ContactData}>
				<h4>New Expense Entry</h4>
				{form}
			</div>
		);
	}
}

export default Expense;
