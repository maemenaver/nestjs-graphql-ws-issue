import { Inject } from "@nestjs/common";
import { Args, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSubEngine } from "graphql-subscriptions";
import {
  TestGraphqlWsEntities,
  TestGraphqlWsFilter,
  TestGraphqlWsPeople,
} from "./test-graphql-ws.entity";

@Resolver()
export class TestGraphqlWsResolver {
  constructor(@Inject("PUB_SUB") private pubsub: PubSubEngine) {}

  @Query((type) => TestGraphqlWsEntities)
  async testNestjsGraphqlSubscription(
    @Args("stringArgsInput") stringArgsInput: string
  ) {
    try {
      const result: TestGraphqlWsEntities = {
        id: "123456789a123456789a1234a",
        statement: "looking",
        peopleLooked: [],
        filter: {
          ...new TestGraphqlWsFilter(),
          toggleBoolean: false,
          onlyMyRailgunOptions1: "샘플텍스트",
          onlyMyRailgunOptions2: null,
          onlyMyRailgunOptions3: null,
          togglepeopleVisibleOption: false,
          timeShowing: 3,
        },
        numberOption1: 5,
        stringOption1: "korean냐옹",
        people: [
          {
            ...new TestGraphqlWsPeople(),
            host: true,
            id: "123456789a123456789a1234b",
            name: "korean냐옹",
            pictureURL: "Long URL",
            stringOption2: "korean텍스트",
            stringOption3: "18",
            sex: false,
            stringOption4: "샘플텍스트",
            numberOption1: 5,
            chattingMessageOption1: "123456789a123456789a1234c",
            chattingMessageOption2: ["123456789a123456789a1234c"],
            chattingMessageOption3: "",
            chattingMessageOption4: [],
            numberOption2: 7,
            booleanOption1: false,
            booleanOption2: true,
          },
          {
            ...new TestGraphqlWsPeople(),
            host: false,
            id: "123456789a123456789a1234c",
            name: "korean냐옹2",
            pictureURL: "Long URL",
            stringOption2: "korean텍스트",
            stringOption3: "18",
            sex: true,
            stringOption4: "샘플텍스트",
            numberOption1: 5,
            chattingMessageOption1: "123456789a123456789a1234b",
            chattingMessageOption2: ["123456789a123456789a1234b"],
            chattingMessageOption3: "",
            chattingMessageOption4: [],
            numberOption2: 3,
            booleanOption1: false,
            booleanOption2: true,
          },
        ],
        type: "standard",
        createdAt: new Date(),
        objectOption1: {
          statement: false,
          index: 1,
          id: "123456789a123456789a1234c",
          name: "korean냐옹2",
          startedDate: new Date(),
        },
        game: {
          createdAt: new Date(),
          limitedTime: 20,
          expireAt: new Date(),
          phase: "sampleLastBefore",
          testType: "TestCase3",
          TestCase2: {
            statement: false,
            index: 0,
            creation: "",
            creationSender: "",
            creationReceiver: "",
            selectedUser: "",
            randomSeed: [],
          },
          TestCase3: {
            statement: true,
            index: 0,
            creation: "korean creation sentiment 나는 밥을 먹었다?",
            creationSender: "123456789a123456789a1234b",
            selectedUser: ["123456789a123456789a1234c"],
          },
        },
      };

      await this.pubsub.publish("subscriptionForTest", {
        subscriptionForTest: result,
      });

      return result;
    } catch (err) {
      throw err;
    }
  }

  @Subscription((type) => TestGraphqlWsEntities, {
    nullable: true,
    filter: (payload, variables) =>
      `${payload.subscriptionForTest.id}` === variables.id ||
      `${payload.subscriptionForTest._id}` === variables.id,
    resolve: (payload) => {
      const entity: TestGraphqlWsEntities = payload.subscriptionForTest;

      if (!entity["id"] && entity["_id"]) entity["id"] = entity["_id"];

      if (entity.statement !== "introducing") {
        entity.objectOption1 = null;
      }

      if (entity.statement !== "waiting") {
        entity.filter = null;
      }

      if (entity.game) {
        switch (entity.game.testType) {
          case "Waiting":
            entity.game.TestCase1 = null;
            entity.game.TestCase2 = null;
            entity.game.TestCase3 = null;
            break;

          case "TestCase1":
            entity.game.TestCase2 = null;
            entity.game.TestCase3 = null;
            break;

          case "TestCase2":
            entity.game.TestCase1 = null;
            entity.game.TestCase3 = null;
            break;

          case "TestCase3":
            entity.game.TestCase1 = null;
            entity.game.TestCase2 = null;
            break;
        }
      }

      return entity;
    },
  })
  subscriptionForTest(@Args("id") id: string) {
    try {
      return this.pubsub.asyncIterator("subscriptionForTest");
    } catch (err) {
      throw err;
    }
  }
}
