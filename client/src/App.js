import React from "react";
import "./App.css";

import {Switch, Route, Link} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Matters from "./containers/Matters/Matters";
import Billings from "./containers/Billings/Billings";
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
						<Route path="/billings" component={Billings} />
						<Route path="/reports" component={Reports} />
						<Route path="/settings" component={Settings} />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
