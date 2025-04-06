import {RESTDataSource} from '@apollo/datasource-rest';
import env from "../env.js";
import type {KeyValueCache} from '@apollo/utils.keyvaluecache';
import { MessageModel } from "../types.js"


class MessagerAPI extends RESTDataSource {
    override baseURL = `${env.MESSAGER_API_URL}`;

    constructor(options: { cache: KeyValueCache }) {
        super(options);
    }

    async sendMessage(data: MessageModel) {
        return await this.post('', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }
}

export default MessagerAPI;