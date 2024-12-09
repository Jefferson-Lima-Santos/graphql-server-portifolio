import { executableSchema } from './src/schema/index';

const config = {
  overwrite: true,
  schema: [
    {
      'graphql/resources/index.ts': {
        // @ts-ignore
        loader: () => {
          return executableSchema;
        },
      },
    },
  ],
  generates: {
    'src/types.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-document-nodes',
      ],
      config: {
        declarationKind: 'interface',
        useTypeImports: false,
      }
    },
  },
  config: {
    useIndexSignature: true,
    contextType: './APIContextInterface#APIContextInterface',
  },
};

export default config;
