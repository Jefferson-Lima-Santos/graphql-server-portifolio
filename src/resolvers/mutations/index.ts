
const mutations = {
    updateProject: (_, {data}, {dataSources}) => {
        return dataSources.gitHubAPI.updateProject(data);
    },
    sendMessage: async (_, { data }, { dataSources }) => {
        return await dataSources.messangerAPI.sendMessage(data);
    }
}

export default mutations;