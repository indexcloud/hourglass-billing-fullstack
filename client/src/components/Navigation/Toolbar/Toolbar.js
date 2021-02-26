import React from "react";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
	<header className={classes.Toolbar}>
		<DrawerToggle clicked={props.drawerToggleClicked} />
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
		<NavLink to="/activities/new-time">
			<Button variant="secondary" size="sm">
				New Time Entry
			</Button>
		</NavLink>
	</header>
);

export default toolbar;
