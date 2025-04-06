import {BaseContext} from "@apollo/server";
import GitHubAPI from "./dataSources/gitHubAPI";
import MessagerAPI from "./dataSources/messangerAPI";


export interface APIContextInterface extends BaseContext {
  dataSources: {
    gitHubAPI: GitHubAPI;
    messangerAPI: MessagerAPI;
  }
}

export default APIContextInterface;
