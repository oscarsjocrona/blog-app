import React, { Component } from 'react';
import Modal from '../../Components/UI/Modal/Modal';
import cssModule from './NewPost.module.css';
import Input from '../../Components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/index';

const controls = {
    title: 'title',
    text: 'text'
}

class NewPost extends Component {

    state = {
        // showModal: true,
        disableSubmit: false,
        controls: {
            [controls.title]: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 20
                },
                valid: false,
                submitted: false
            },
            [controls.text]: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Mini-text'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 200
                },
                valid: false,
                submitted: false
            }
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.showModal && this.props.showModal != prevProps.showModal){
            this.setState({disableSubmit: false});
        }

        if (prevProps.addSuccess != this.props.addSuccess && this.props.addSuccess) {
            this.props.onClose();
            this.resetStateControlValues();
        }
    }

    modalClosed = () => {
        this.props.onClose();
        this.resetStateControlValues();
    }

    resetStateControlValues() {
        setTimeout(() => {

            const updatedControls = { ...this.state.controls };
            for (let key in updatedControls) {
                const controlClone = { ...updatedControls[key] };
                controlClone.value = '';
                controlClone.valid= false;
                controlClone.submitted=false;
                updatedControls[key] = controlClone;
            }

            this.setState({ controls: updatedControls });
            this.props.onNewPostInit();
        },
            300);
    }

    formSubmitHandler = (event) => {
        event.preventDefault(); //Prevent to send request which will automatically reload the page (re-render)
        this.setState({disableSubmit: true});
        const updatedControls = [];
        for (let key in this.state.controls) {
            const updatedControl = {
                ...this.state.controls[key]
            };
            updatedControl.submitted = true;
            updatedControl.valid = this.checkValidity(updatedControl.value, updatedControl.validation);
            updatedControls[key] = updatedControl;
        }
        this.setState({ controls: updatedControls });
        if (updatedControls[controls.title].valid && updatedControls[controls.text].valid) {
            this.props.onSubmitBlogPost(updatedControls[controls.title].value, updatedControls[controls.text].value);
        }
        else{
            this.setState({disableSubmit: false});
        }
    }

    inputHandler(event, id) {
        const updatedControls = {
            ...this.state.controls
        }

        const updatedControl = {
            ...updatedControls[id]
        }

        updatedControl.value = event.target.value;
        updatedControl.submitted = false;

        updatedControls[id] = updatedControl;

        this.setState({ controls: updatedControls });

    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }


    render() {
        const elements = [];
        for (let key in this.state.controls) {
            elements.push({
                id: key,
                elementData: this.state.controls[key]
            });
        }
        // !props.valid && props.validationRequired && props.submitted
        const inputElements = elements.map(element => {
            return (<Input
                key={element.id}
                elementConfig={element.elementData.elementConfig}
                elementType={element.elementData.elementType}
                valid={element.elementData.valid}
                submitted={element.elementData.submitted}
                validationRequired={element.elementData.validation.required}
                value={element.elementData.value}
                changed={(event) => { this.inputHandler(event, element.id) }} />)
        });

        return (
            <Modal closed={this.modalClosed}
                show={this.props.showModal}>
                <div className={cssModule.NewPost}>
                    <form onSubmit={this.formSubmitHandler}>
                        {inputElements}
                        <button disabled={this.state.disableSubmit} style={{ left: "-22%" }}>Submit</button >
                    </form>
                </div>
            </Modal>);
    }
}

const mapStatsToProps = state => {
    return {
        addSuccess: state.postsReducer.addSuccess
        // addPostComplete : state.postsReducer.addPostComplete 
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitBlogPost: (title, text) => dispatch(actions.addPost(title, text)),
        onNewPostInit: () => dispatch(actions.newPostInit())

    }
}

export default connect(mapStatsToProps, mapDispatchToProps)(NewPost);