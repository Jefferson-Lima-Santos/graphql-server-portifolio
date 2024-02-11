import {RESTDataSource, AugmentedRequest} from '@apollo/datasource-rest';
import env from "../env.js";
import type {KeyValueCache} from '@apollo/utils.keyvaluecache';


class GitHubAPI extends RESTDataSource {
    override baseURL = `${env.GITHUB_API_URL}`;
    private readonly token: string;
    private readonly gitHubUser: string;

    constructor(options: { cache: KeyValueCache }) {
        super(options);
        this.token = env.GITHUB_API_TOKEN;
        this.gitHubUser = env.GITHUB_API_USER;
    }

    override willSendRequest(_path: string, request: AugmentedRequest) {
        request.headers['Authorization'] = `Bearer ${this.token}`;
    }

    async updateProject(token: string = null) {
        return "Você Executou a função mutation de Projects";
    }
    async getProjects() {
        return await this.get(`users/${this.gitHubUser}/repos`);
    }
}

export default GitHubAPI;