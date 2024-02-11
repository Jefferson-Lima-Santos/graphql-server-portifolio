import {RESTDataSource} from '@apollo/datasource-rest';
import env from "../env.js";
import type {KeyValueCache} from '@apollo/utils.keyvaluecache';


class GitHubAPI extends RESTDataSource {
    override baseURL = `${env.GITHUB_API_URL}`;
    private readonly token: string;

    constructor(options: { cache: KeyValueCache }) {
        super(options);
    }

    async updateProject(token: string = null) {
        return "Você Executou a função mutation de Projects";
    }
    async getProjects() {
        return ["Projeto 1", "Projeto 2", "Projeto 3"];
    }
}

export default GitHubAPI;