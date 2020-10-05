import React, { Component } from 'react';
import Sidebar from './../Components/Navigation/Sidebar/Sidebar';
import Toolbar from './../Components/Navigation/Toolbar/Toolbar';
import cssModule from './Layout.module.css';

class Layout extends Component {
    state = {
        menuItems: [
            { text: 'Posts', link: '/posts' },
            // { text: 'New Post', link: '/newpost' },
            { text: 'About', link: '/about' },
            { text: 'Help', link: '/help' }]
    }

    render() {
        return (
            <div>
                <div className={cssModule.Layout}>
                    <Toolbar></Toolbar>
                    <div className={cssModule.Content}>
                        <Sidebar  MenuItems={this.state.menuItems}></Sidebar>
                        <main className={cssModule.Main}>
                            {this.props.children}
                        </main>
                        <div style={{textAlign: 'center'}} className={cssModule.ContentFlow}>
                            Placeholder
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Layout;