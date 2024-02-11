import gql from "graphql-tag";

const schema = gql`
  type Query {
    getProjects: [String]
  }

  type Mutation {
    updateProject(data: String): String
  }
`

export default schema