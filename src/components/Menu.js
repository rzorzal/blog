import React from 'react';

import GitHubContext from '../contexts/github';



export default class Menu extends React.Component{

    static contextType = GitHubContext;

    componentDidMount(){
    }

    render(){

        console.log(this.context);

        return (
            <div style={{borderLeft: "1px solid black", minHeight:"100vh", padding: '5px'}}>
                <header style={{height: '20vh', borderBottom: '1px solid black'}}>
                    <h2>{ (this.context.user && this.context.user.name) || "Loading..."}</h2>
                </header>  
                {/* <Items></Items> */}
            </div>
        )
    }
}