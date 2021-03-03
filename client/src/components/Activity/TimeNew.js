import React from "react";
import Select from "react-select";

import classes from "./Time.module.css";
import axios from "axios";
import Input from "../UI/Input/Input";

class Time extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			matters: "",
			matterId: "",
			timeForm: {
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
						placeholder: "Duration",
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
			},
			formIsValid: false,
			loading: false,
		};
	}

	componentDidMount = () => {
		axios.get("/matters").then(res => {
			this.setState({matters: res.data});
		});
	};

	submitHandler = event => {
		event.preventDefault();
		this.setState({loading: true});
		const formData = {};
		for (let formElementIdentifier in this.state.timeForm) {
			formData[formElementIdentifier] = this.state.timeForm[formElementIdentifier].value;
		}

		formData.matter = this.state.matter;

		axios
			.post("/activities/new-time", formData)
			.then(res => {
				this.setState({loading: false});
				this.props.history.push("/activities");
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
		const updatedTimeForm = {
			...this.state.timeForm,
		};

		const updatedFormElement = {
			...updatedTimeForm[inputIdentifier],
		};
		updatedFormElement.value = event.target.value;
		updatedTimeForm[inputIdentifier] = updatedFormElement;

		let formIsValid = true;
		for (let inputIdentifier in updatedTimeForm) {
			formIsValid = updatedTimeForm[inputIdentifier].valid && formIsValid;
		}
		this.setState({timeForm: updatedTimeForm, formIsValid: formIsValid});
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

		const formElementsArray = [];
		for (let key in this.state.timeForm) {
			formElementsArray.push({
				id: key,
				config: this.state.timeForm[key],
			});
		}
		let form = (
			<form onSubmit={this.submitHandler}>
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
				<button>Save Time Entry</button>
			</form>
		);

		return (
			<div className={classes.ContactData}>
				<h4>New Time Entry</h4>
				{form}
			</div>
		);
	}
}

export default Time;
