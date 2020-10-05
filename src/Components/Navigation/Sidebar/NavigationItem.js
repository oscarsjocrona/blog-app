import React from 'react';
import { NavLink } from 'react-router-dom';
import cssModule from './NavigationItem.module.css';


const navigationItem = (props) => (
    // <li className={cssModule.NavigationItem}>
    <li className={cssModule.NavigationItem}>
        <NavLink to={props.Link}
            // activeClassName={cssModule.Active} 
            exact>{props.children} 
        </NavLink>
    </li>
);

export default navigationItem;