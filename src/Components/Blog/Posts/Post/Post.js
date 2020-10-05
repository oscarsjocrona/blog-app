import React, { Component } from 'react';
import cssModule from './Post.module.css';
import { faTrashAlt, faShareAlt, faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FadingDiv from './../../../UI/FadingDiv/FadingDiv';

// const deletePost = (delegate, postId) => {

//     delegate(postId);
// }

class post extends Component {



    render() {
        // const animatedStyle = useSpring({opacity: 1, from: {opacity: 0}});
        return (
            
                <div className={cssModule.Post}>
                    <div className={cssModule.Title}>
                        <div>
                            <label>
                                <span style={{ fontWeight: 'bold' }}>{this.props.title}</span>
                                <span style={{ textDecorationLine: 'underline' }}>@Berit</span>
                            </label></div>
                    </div>
                    <div className={cssModule.Content}>
                        <p>{this.props.text}</p>
                    </div>
                    <div className={cssModule.BarMenu}>
                        <button className={cssModule.MenuButton}><FontAwesomeIcon icon={faReply}></FontAwesomeIcon></button>
                        <button className={cssModule.MenuButton}><FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon></button>
                        <button
                            className={cssModule.MenuButton}
                            onClick={() => this.props.onDeletePost(this.props.id)}
                        ><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                    </div>
                </div>
            
        );
    }
}

export default post;

// onClick={() => props.onDeletePost(props.id)}