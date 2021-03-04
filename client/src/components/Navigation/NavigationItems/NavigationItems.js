import React from "react";
import classes from "./NavigationItems.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

class NavigationItems extends React.Component {
	postSignOut = async () => {
		console.log("signout");
		await axios
			.get("/signout")
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<ul className={classes.NavigationItems}>
				<li className={classes.NavigationItem}>
					<NavLink to="/contacts" activeClassName={classes.active}>
						Contacts
					</NavLink>
				</li>
				<li className={classes.NavigationItem}>
					<NavLink to="/matters" activeClassName={classes.active}>
						Matters
					</NavLink>
				</li>

				<li className={classes.NavigationItem}>
					<NavLink to="/activities" activeClassName={classes.active}>
						Activities
					</NavLink>
				</li>
				<li className={classes.NavigationItem}>
					<NavLink to="/billing" activeClassName={classes.active}>
						Billing
					</NavLink>
				</li>
				<li className={classes.NavigationItem}>
					<NavLink to="/reports" activeClassName={classes.active}>
						Reports
					</NavLink>
				</li>
				{/* <li className={classes.NavigationItem}>
					<NavLink to="/settings" activeClassName={classes.active}>
						Settings
					</NavLink>
				</li> */}
				{/* <li className={classes.NavigationItem}>
					<NavLink to="/signout" activeClassName={classes.active} onClick={this.postSignOut}>
						Sign Out
					</NavLink>
				</li> */}
			</ul>
		);
	}
}

export default NavigationItems;
