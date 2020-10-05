import React from 'react';
import cssModule from './Input.module.css';

const input = props => {

    const cssModuleClasses = [];

    let errorLabel = null;
    let input = null;

    if (!props.valid && props.validationRequired && props.submitted) {
        errorLabel = (<p style={{
            backgroundColor: '#f9514e',
            color: '#f8f7f7'
        }}>Please enter a valid value!</p>);
        cssModuleClasses.push(cssModule.Invalid);
    }

    switch (props.elementType) {
        case 'input':
            cssModuleClasses.push(cssModule.InputInput);
            input =
                (<input
                    className={cssModuleClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}></input>);
                    break;
        case 'textarea':
            cssModuleClasses.push(cssModule.InputTextarea);
            input =
                (<textarea
                    className={cssModuleClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}></textarea>);
                    break;
    }

    return (<div>
        {input}
        {errorLabel}
    </div>);
}

export default input;