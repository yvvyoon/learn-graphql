import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
	// 구현부가 없으므로 No schema defined 에러 발생
    typeDefs: 'graphql/schema.graphql',
    resolvers

	// Resolvers가 없어도 No schema defined 에러 발생
});

server.start(() => console.log('GraphQL Server is running'));
