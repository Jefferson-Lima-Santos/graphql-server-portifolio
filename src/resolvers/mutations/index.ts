
const mutations = {
    updateProject: (_, {data}, {dataSources}) => {
        return dataSources.gitHubAPI.updateProject(data);
    }
}

export default mutations;