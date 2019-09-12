import React from 'react';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import GitHubContext from '../contexts/github';

import './css/Menu.css';


export default class Menu extends React.Component {

    static contextType = GitHubContext;

    render() {

        return (
            <div className="MenuContainer">
                <header>
                    <div className="Avatar" style={ {backgroundImage: `url('${(this.context.user && this.context.user['avatar_url']) || 'https://picsum.photos/120/120'}')` }} ></div>
                    <h4>{(this.context.user && this.context.user.name) || "Loading..."}</h4>
                    <h5>{(this.context.user && this.context.user.bio) || "Loading..."}</h5>
                </header>
                {/* <Items></Items> */}
            </div>
        )
    }
}