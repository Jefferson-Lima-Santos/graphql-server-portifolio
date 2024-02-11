//@ts-ignore
import {BaseContext} from "@apollo/server";
//@ts-ignore
import GitHubAPI from "./dataSources/gitHubAPI.js";


export interface APIContextInterface extends BaseContext {
  dataSources: {
    gitHubAPI: GitHubAPI;
  }
}

export default APIContextInterface;
