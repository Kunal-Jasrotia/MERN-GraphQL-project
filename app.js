const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema, execute } = require('graphql')
const app = express();

app.use(express.json())
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
    type RootQuery{
         events: [String!]!
    }

    type RootMutation{
        createEvent(name:String):String
    }

    schema {
        query:RootQuery
        mutation:RootMutation
    }
    `),
    rootValue: {
        events: () => {
            return ['a', 'b', 'c']
        },
        createEvent: (args) => {
            let eventName = args.name
            return eventName
        }
    },
    graphiql: true
}))

app.listen(3000);