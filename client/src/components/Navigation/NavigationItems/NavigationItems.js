import React from "react";
import classes from "./NavigationItems.module.css";
import {NavLink} from "react-router-dom";

class NavigationItems extends React.Component {
	render() {
		return (
			<ul className={classes.NavigationItems}>
				<li className={classes.NavigationItem}>
					<NavLink to="/matters" activeClassName={classes.active}>
						Matters
					</NavLink>
				</li>
				<li className={classes.NavigationItem}>
					<NavLink to="/contacts" activeClassName={classes.active}>
						Contacts
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
				<li className={classes.NavigationItem}>
					<NavLink to="/signout" activeClassName={classes.active}>
						Sign Out
					</NavLink>
				</li>
			</ul>
		);
	}
}

export default NavigationItems;
