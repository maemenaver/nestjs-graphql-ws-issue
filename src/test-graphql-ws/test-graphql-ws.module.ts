import { Module } from "@nestjs/common";
import { TestGraphqlWsResolver } from "./test-graphql-ws.resolver";
import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis from "ioredis";

@Module({
  providers: [
    TestGraphqlWsResolver,
    {
      provide: "PUB_SUB",
      useFactory: () => {
        return new RedisPubSub({
          publisher: new Redis({
            host: "127.0.0.1",
            port: 6379,
          }),
          subscriber: new Redis({
            host: "127.0.0.1",
            port: 6379,
          }),
        });
      },
    },
  ],
  exports: [TestGraphqlWsResolver],
})
export class TestGraphqlWsModule {}
