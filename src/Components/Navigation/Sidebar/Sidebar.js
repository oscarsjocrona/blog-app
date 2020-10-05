import React from 'react';
import cssModule from './Sidebar.module.css';
import NavigationItem from './NavigationItem';
import {connect} from 'react-redux';

const Sidebar = props => {
    console.log(props.showSidebar);
    let cssModuleStyles = [cssModule.Sidebar, cssModule.Close];
    if (props.showSidebar) {
        cssModuleStyles = [cssModule.Sidebar, cssModule.Open];
    }

    const navigationItems = getNavigationItems(props.MenuItems);

    return <div className={cssModuleStyles.join(' ')}>
        <nav>
            <ul className={cssModule.LinksList}>
                {navigationItems}
            </ul>
        </nav>
    </div>
}

const getNavigationItems = (items) => {
    return items.map(item => {
        return <NavigationItem Link={item.link}>{item.text}</NavigationItem>
    });
}

const mapStateToProps = state => {
    return {
        showSidebar: state.navigationReducer.showSidebar
    }
}

export default connect(mapStateToProps)(Sidebar);