const { GraphQLServer } = require('graphql-yoga')

// Dummy data
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}];

let idCount = links.length;

// Define implementation of Schema
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
        link: (parent, args) => {
            return links.find((link) => link.id === args.id);
        }
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url
            }
            links.push(link);
            return link;
        },
        updateLink: (parent, args) => {
            // Find link with args id
            const linkIndex = links.findIndex(link => link.id === args.id);
            // Replace link with new info
            if(args.url) {
                links[linkIndex].url = args.url;
            }
            if(args.description) {
                links[linkIndex].description = args.description;
            }
            
            return links[linkIndex];
        },
        deleteLink: (parent, args) => {
            // Find link with args id
            const linkIndex = links.findIndex(link => link.id === args.id);
            const removedLink = links[linkIndex];
            links.splice(linkIndex, 1);
            return removedLink;
            /* const resultLinks = links.filter(link => link.id !== args.id);
            links = resultLinks;
            return links; */
        }
    }
}

// Create server instance and run
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))


