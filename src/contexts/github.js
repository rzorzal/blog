import React from 'react';


const value = {
    user: undefined,
    issues: [],
    selectedIssue: undefined
}

const GitContext = React.createContext(value);

export const GitProvider = GitContext.Provider;
export const GitConsumer = GitContext.Consumer;

export default GitContext;