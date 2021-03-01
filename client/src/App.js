import React from "react";
import "./App.css";

import {Switch, Route, Redirect} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import SignIn from "./containers/Auth/SignIn";
import SignUp from "./containers/Auth/SignUp";
import Matters from "./containers/Matters/Matters";
import Contacts from "./containers/Contacts/Contacts";
import Activities from "./containers/Activities/Activities";
import Billing from "./containers/Billing/Billing";
import Reports from "./containers/Reports/Reports";
// import Settings from "./containers/Settings/Settings";

class App extends React.Component {
	state = {
		data: null,
		showSideDrawer: false,
	};

	render() {
		return (
			<div className="App">
				<Layout>
					<Switch>
						<Route path="/" exact component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/matters" component={Matters} />
						<Route path="/contacts" component={Contacts} />
						<Route path="/activities" component={Activities} />
						<Route path="/billing" component={Billing} />
						<Route path="/reports" component={Reports} />
						{/* <Route path="/settings" component={Settings} /> */}
						<Route path="/signout">
							<Redirect to="/" />
						</Route>
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
