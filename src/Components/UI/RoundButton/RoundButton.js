import React from 'react';
import cssModules from './RoundButton.module.css';

const RoundButton = (props) => {
    return <button
        className={cssModules.RoundButton}
        {...props}>{props.children}
    </button>
}

export default RoundButton;