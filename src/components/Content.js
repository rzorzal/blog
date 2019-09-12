import './css/Markdown.css';

import React from 'react';
import ReactMarkdown from 'react-markdown';

import GitHubContext from '../contexts/github';

import moment from "moment";


export default class Menu extends React.Component{

    static contextType = GitHubContext;

    render(){
        return (
            <div style={{minHeight: "100vh", overflowY: 'auto', padding: '5px'}}>
                <div style={{borderBottom: "1px solid black", padding: "10px", marginBottom: '10px'}}>
                    <h1>{this.context.selectedIssue && this.context.selectedIssue.title}</h1>
                    <small>
                        {
                            this.context.selectedIssue &&
                            this.context.selectedIssue.created_at &&
                            moment(this.context.selectedIssue.created_at).format('LL')
                        }
                    </small>
                </div>
                <div style={{padding: "10px"}}>
                    <ReactMarkdown source={this.context.selectedIssue && this.context.selectedIssue.body} />
                </div>
            </div>
        )
    }
}