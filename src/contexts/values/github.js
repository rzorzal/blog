const HOST = 'https://api.github.com';

export default class GitHubValues {
    
    static async getUser(){
        const response = await fetch(`${HOST}/users/rzorzal`);

        if(!response.ok){
            throw new Error('Erro ao recuperar informações sobre o autor do Blog');
        }

        const data = await response.json();

        if(data.message){
            throw new Error(data.message)
        }

        return data;

    }

    static async getIssues(){
        const response = await fetch(`${HOST}/repos/rzorzal/blog/issues?per_page=10&page=1&labels=posted`);

        if(!response.ok){
            throw new Error('Erro ao recuperar informações sobre as issues do Blog');
        }

        const data = await response.json();

        if(data.message){
            throw new Error(data.message)
        }

        return data;

    }

    static async getSingleIssue(issueNumber){
        const response = await fetch(`${HOST}/repos/rzorzal/blog/issues/${issueNumber}`);

        if(!response.ok){
            throw new Error('Erro ao recuperar informações sobre uma issue do Blog');
        }

        const data = await response.json();

        if(data.message){
            throw new Error(data.message)
        }

        return data;

    }

}