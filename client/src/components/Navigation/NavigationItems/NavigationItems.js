import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/matters" active>
			Matters
		</NavigationItem>
		<NavigationItem link="/billings">Billings</NavigationItem>
		<NavigationItem link="/reports">Reports</NavigationItem>
		<NavigationItem link="/settings">Settings</NavigationItem>
		<NavigationItem link="/">Sign Out</NavigationItem>
	</ul>
);

export default navigationItems;
