import React from 'react';
import cssModule from './Backdrop.module.css';

const backdrop = props => (
    props.show ?
        <div className={cssModule.Backdrop} onClick={props.closed} />
        : null);

export default backdrop;