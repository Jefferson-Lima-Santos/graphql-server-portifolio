
const queries = {
    getProjects: (_, {data}, {dataSources}) => {
        return dataSources.gitHubAPI.getProjects(data);
    }
}

export default queries;