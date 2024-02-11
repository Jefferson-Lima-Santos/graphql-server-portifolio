import gql from "graphql-tag";

const schema = gql`
  type RepositoryModel {
    name: String
    private: Boolean
    html_url: String
    created_at: String
    updated_at: String
    description: String
  }
  type Query {
    getProjects: [RepositoryModel]
  }

  type Mutation {
    updateProject(data: String): String
  }
`

export default schema