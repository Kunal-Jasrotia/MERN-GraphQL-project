import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
const app = express();

app.use(express.json())
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
    type RootQuery{
         
    }

    type RootMutation{

    }

    schema {
        query:RootQuery
        mutation:RootMutation
    }
    `),
    rootValue: {}
}))

app.listen(3000);