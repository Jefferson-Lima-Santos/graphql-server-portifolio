import {BaseContext} from "@apollo/server";
import GitHubAPI from "./dataSources/gitHubAPI.js";


export interface APIContextInterface extends BaseContext {
  dataSources: {
    gitHubAPI: GitHubAPI;
  }
}

export default APIContextInterface;
