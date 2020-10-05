import React, { Component } from 'react';
import cssModule from './PostBillboard.module.css';
import { connect } from 'react-redux';
import * as actions from './../../Store/Actions/index';
import Posts from './../../Components/Blog/Posts/Posts';
import NewPost from '../NewPost/NewPost';
import RoundButton from './../../Components/UI/RoundButton/RoundButton';
// import * as actions from './../../Store/actionTypes';

class PostBillboard extends Component {

    state = {
        showModal: false
    };

    componentDidMount() {
        this.props.onLoadPosts();
    }

    closeNewPostDialogue = () => {
        this.setState({ showModal: false });
    }

    openNewPostDialogue = () => {
        this.setState({ showModal: true });
    }

    render() {
        return (<div className={cssModule.PostBillboard}>
            <div>
                <Posts
                    items={this.props.posts}
                    onDeletePost={(id) => this.props.onDeletePost(id)} />
                <NewPost onClose={this.closeNewPostDialogue} showModal={this.state.showModal} style={{ position: 'fixed', left: '30%', top: '30%' }}></NewPost>
                <RoundButton onClick={this.openNewPostDialogue} style={{ position: 'fixed', bottom: '3vh', left: '45vw' }}>New Post</RoundButton>
            </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postsReducer.posts
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadPosts: () => dispatch(actions.fetchPosts()),
        onDeletePost: (id) => dispatch(actions.deletePost(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostBillboard);