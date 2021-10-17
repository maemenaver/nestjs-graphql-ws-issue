import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { join } from "path";

import { TestGraphqlWsModule } from "./test-graphql-ws/test-graphql-ws.module";

@Module({
  imports: [
    TestGraphqlWsModule,
    GraphQLModule.forRootAsync({
      useFactory: async () => ({
        buildSchemaOptions: {
          dateScalarMode: "isoDate",
        },
        cors: true,
        autoSchemaFile: join(process.cwd(), "src/schema.gql"),
        sortSchema: true,
        context: (context) => {
          try {
            const { connectionParams, req } = context;
            if (connectionParams) {
              connectionParams.headers["authorization"] =
                connectionParams.headers["Authorization"];
            }

            return connectionParams ? { req: connectionParams } : { req };
          } catch (err) {
            throw err;
          }
        },
        subscriptions: {
          "graphql-ws": {
            onConnect: (context: any) => {
              try {
                const { connectionParams } = context;

                const authorization: string = connectionParams.headers
                  .authorization
                  ? connectionParams.headers.authorization
                  : connectionParams.headers.Authorization;

                if (!authorization) {
                  throw new Error("authToken must be provided");
                }

                const authToken: string = authorization.split(" ")[1];

                const jwtPayload = {
                  username: "username",
                };

                return {
                  currentUser: jwtPayload.username,
                  jwtPayload,
                  headers: connectionParams.headers,
                };
              } catch (err) {
                throw err;
              }
            },
          },
        },
      }),
    }),
  ],
})
export class AppModule {}
