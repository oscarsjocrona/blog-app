import React from 'react';
import AnimatedMenuIcon from './../../UI/MenuIcon/AnimatedMenuIcon';
import cssModule from './Toolbar.module.css';

const toolbar = () => {
    return (
        <header className= {cssModule.Toolbar}>
            <AnimatedMenuIcon/>
            {/* <div>regions</div> */}
        </header>
    );
}

export default toolbar;