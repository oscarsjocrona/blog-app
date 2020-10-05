import React, { useEffect, useState } from 'react';
import Backdrop from '../Backdrop/Backrop';
import cssModule from './Modal.module.css';


 const areEqual = (prevProps, nextProps) => {
     console.log(prevProps);
     console.log(nextProps);
    return prevProps.show === nextProps.show && prevProps.children == nextProps.children;
    
}

const Modal = React.memo((props) => {

    // const [show, setShow] = useState(false);
    // useEffect(() => { //Fel
    //     setShow(true);
    // });

    const classes = [cssModule.Modal];
    if(props.show){
        classes.push(cssModule.Opening);
    }

    // if (!props.show && show) {
    //     setShow(false);
    // }

    return (<div>
        <Backdrop show={props.show} closed={props.closed}></Backdrop>
        <div className={classes.join(' ')}>
            {props.children}
        </div>
    </div>);
}, areEqual);

export default Modal;

