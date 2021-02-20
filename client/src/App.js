import React from "react";
import "./App.css";

import {Switch, Route, Redirect} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Matters from "./containers/Matters/Matters";
import Contacts from "./containers/Contacts/Contacts";
import Billing from "./containers/Billing/Billing";
import Reports from "./containers/Reports/Reports";
import Settings from "./containers/Settings/Settings";

class App extends React.Component {
	state = {
		data: null,
		showSideDrawer: false,
	};

	render() {
		console.log("first");
		return (
			<div className="App">
				<Layout>
					<Switch>
						<Route path="/" exact component={Auth} />
						<Route path="/matters" component={Matters} />
						<Route path="/contacts" component={Contacts} />
						<Route path="/billing" component={Billing} />
						<Route path="/reports" component={Reports} />
						<Route path="/settings" component={Settings} />
						<Route path="/signout">
							<Redirect to="/matters" />
						</Route>
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
