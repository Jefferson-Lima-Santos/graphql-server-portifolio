import {BaseContext} from "@apollo/server";
import GitHubAPI from "./dataSources/gitHubAPI";


export interface APIContextInterface extends BaseContext {
  dataSources: {
    gitHubAPI: GitHubAPI;
  }
}

export default APIContextInterface;
