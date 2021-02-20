import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/matters" exact>
			Matters
		</NavigationItem>
		<NavigationItem link="/contacts">Contacts</NavigationItem>
		<NavigationItem link="/billing">Billing</NavigationItem>
		<NavigationItem link="/reports">Reports</NavigationItem>
		<NavigationItem link="/settings">Settings</NavigationItem>
		<NavigationItem link="/signout">Sign Out</NavigationItem>
	</ul>
);

export default navigationItems;
