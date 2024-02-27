import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import {buildSchema, Resolver, Query, Arg, ObjectType, Field, ID } from "type-graphql";
import { ServerResponse, IncomingMessage } from "http";
import { DogsResolver } from "@/schema/dogs.resolvers";

// @ObjectType()
//     export class Dog{
//         @Field(() => ID)
//        name: string | undefined;
// }

// @Resolver(Dog)
// export class DogsResolver {
//     @Query(() => [Dog])
//     dogs() : Dog[] {
//         return [
//             {name: "Bo"},
//             {name: "Lassie"},
//         ];
//     }
// }


const schema = await buildSchema({
    resolvers: [DogsResolver],
});

const server =  new ApolloServer({
    schema,
});

export const config = {
    api: {
        bodyParser: false,
    },
};
const startServer = server.start(); 
export default async function handler(req: MicroRequest, res: ServerResponse<IncomingMessage>) {
    await startServer;
    await server.createHandler({path: "/api/graphql"})(req, res);
} 