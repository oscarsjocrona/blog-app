import React, { useState } from 'react';
import cssModule from './AnimatedMenuIcon.module.css';
import { connect } from 'react-redux';
import * as actionTypes from './../../../Store/actionTypes';


const MenuIcon = props => {
    const cssModulesBar1 = [cssModule.AnimatedMenuIcon];
    const cssModulesBar2 = [cssModule.AnimatedMenuIcon];
    const cssModulesBar3 = [cssModule.AnimatedMenuIcon];
    
    if (props.expanded) {
        cssModulesBar1.push(cssModule.bar1);
        cssModulesBar2.push(cssModule.bar2);
        cssModulesBar3.push(cssModule.bar3);
    }
    console.log(props.expanded);

    return (
        <div className={cssModule.AnimatedMenuIconContainer} onClick={() => props.onMenuClicked(!props.expanded)}>
            <div className={cssModulesBar1.join(' ')}></div>
            <div className={cssModulesBar2.join(' ')}></div>
            <div className={cssModulesBar3.join(' ')}></div>
        </div>);
}

const mapStateToProps = state => {
    return {
        expanded: state.navigationReducer.showSidebar
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onMenuClicked: (expanded) => dispatch( {type: actionTypes.SIDEBAR_SHOW, showSidebar: expanded})
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuIcon);