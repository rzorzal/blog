import './css/Markdown.css';

import React from 'react';
import ReactMarkdown from 'react-markdown';

import GitHubContext from '../contexts/github';



export default class Menu extends React.Component{

    static contextType = GitHubContext;

    render(){
        return (
            <div style={{minHeight: "100vh", overflowY: 'auto', padding: '5px'}}>
                <div style={{borderBottom: "1px solid black", padding: "5px", marginBottom: '10px', backgroundColor: "#ddd"}}>
                    <h1>{this.context.selectedIssue && this.context.selectedIssue.title}</h1>
                    <small>
                        {this.context.selectedIssue && this.context.selectedIssue.created_at}
                    </small>
                </div>
                <div style={{padding: "10px"}}>
                    <ReactMarkdown source={this.context.selectedIssue && this.context.selectedIssue.body} />
                </div>
            </div>
        )
    }
}