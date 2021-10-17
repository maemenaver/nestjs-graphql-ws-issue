import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TestGraphqlWsPeopleVoice {
  @Field((type) => Boolean, {
    nullable: true,
  })
  serverDeaf?: boolean = false;

  @Field((type) => Boolean, {
    nullable: true,
  })
  serverMute?: boolean = false;

  @Field((type) => Boolean, {
    nullable: true,
  })
  selfDeaf?: boolean = false;

  @Field((type) => Boolean, {
    nullable: true,
  })
  selfMute?: boolean = false;

  @Field((type) => Boolean, {
    nullable: true,
  })
  speaking?: boolean = false;
}

@ObjectType()
export class TestGraphqlWsEmoticon {
  @Field({ nullable: true })
  updatedAt: Date = new Date();

  @Field({
    nullable: true,
  })
  name: string = null;
}

@ObjectType()
export class TestGraphqlWsPeople {
  @Field()
  host: boolean = false;

  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  pictureURL: string;

  @Field()
  stringOption2: string;

  @Field()
  stringOption3: string;

  @Field((type) => Boolean)
  sex!: boolean;

  @Field()
  stringOption4: string;

  @Field()
  numberOption1: number;

  @Field()
  chattingMessageOption1: string = "";

  @Field((type) => [String])
  chattingMessageOption2: string[] = [];

  @Field()
  chattingMessageOption3: string = "";

  @Field((type) => [String])
  chattingMessageOption4: string[] = [];

  @Field((type) => Int)
  numberOption2: number = 0;

  @Field()
  booleanOption1: boolean = false;

  @Field((type) => Boolean, {
    nullable: true,
  })
  booleanOption2: boolean = true;

  @Field((type) => TestGraphqlWsPeopleVoice)
  voice: TestGraphqlWsPeopleVoice = new TestGraphqlWsPeopleVoice();

  @Field((type) => TestGraphqlWsEmoticon, { nullable: true })
  emoticon: TestGraphqlWsEmoticon = new TestGraphqlWsEmoticon();
}

@ObjectType()
export class TestGraphqlWsFilter {
  @Field((type) => Boolean, { nullable: true })
  toggleBoolean: boolean;

  @Field({ nullable: true })
  privatePassword?: string;

  @Field((type) => Boolean, { nullable: true })
  onlyMyUnivToggle: boolean;

  @Field({ nullable: true })
  onlyMyRailgunOptions1?: string;

  @Field((type) => Boolean, { nullable: true })
  onlyMyLocationToggle: boolean;

  @Field({ nullable: true })
  onlyMyRailgunOptions2?: string;

  @Field()
  togglepeopleVisibleOption: Boolean;

  @Field((type) => Boolean, { nullable: true })
  selectUnivToggle: boolean;

  @Field({ nullable: true })
  selectUnivFemale?: string;

  @Field({ nullable: true })
  selectUnivMale?: string;

  @Field((type) => Boolean, { nullable: true })
  selectDeptCategoryToggle: boolean;

  @Field({ nullable: true })
  selectDeptCategoryFemale?: string;

  @Field({ nullable: true })
  selectDeptCategorymale?: string;

  @Field((type) => Int)
  maxPeople: number = 8;

  @Field()
  timeShowing: number = 3;

  @Field({ nullable: true })
  onlyMyRailgunOptions3?: Date;
}

@ObjectType()
export class TestGraphqlWsobjectOption1 {
  @Field({ defaultValue: false })
  statement: boolean = false;

  @Field((type) => Int, { defaultValue: -1 })
  index: number = -1;

  @Field()
  id: string = "";

  @Field()
  name: string = "";

  @Field()
  startedDate: Date = new Date();
}

@ObjectType()
export class TestGraphqlWsGameTestCase2 {
  @Field((type) => Boolean, {
    defaultValue: false,
  })
  statement: boolean = false;

  @Field((type) => Int, { defaultValue: 0 })
  index: number = 0;

  @Field({ nullable: true })
  creation?: string;

  @Field({ nullable: true })
  creationSender?: string;

  @Field({ nullable: true })
  creationReceiver?: string;

  @Field({ nullable: true })
  selectedUser?: string;

  @Field((type) => [Int])
  randomSeed: number[];
}

@ObjectType()
export class TestGraphqlWsGameTestCase3 {
  @Field((type) => Boolean, {
    defaultValue: false,
  })
  statement: boolean = false;

  @Field((type) => Int, {
    nullable: true,
    defaultValue: 0,
  })
  index: number = 0;

  @Field({ nullable: true })
  creation?: string;

  @Field({ nullable: true })
  creationSender?: string;

  @Field({
    nullable: true,
  })
  creationReceiver?: string;

  @Field((type) => [String], {
    nullable: true,
  })
  selectedUser: string[] = [];
}

@ObjectType()
export class TestCase1SelectedAnswer {
  @Field({ nullable: true })
  id?: string;

  @Field((type) => Int, { nullable: true })
  answer?: number;
}

@ObjectType()
export class TestCase1MafiaUser {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class TestGraphqlWsGameTestCase1 {
  @Field((type) => Boolean, {
    defaultValue: false,
  })
  statement: boolean = false;

  @Field({ nullable: true })
  startUser?: string;

  @Field()
  type: string = "Mild";

  @Field({
    nullable: true,
  })
  mafia?: TestCase1MafiaUser;

  @Field({ nullable: true })
  creation?: string;

  @Field((type) => [String], {
    nullable: true,
  })
  answer?: string[];

  @Field((type) => Int, {
    nullable: true,
  })
  selectedMafiaAnswer?: number = -1;

  @Field((type) => [TestCase1SelectedAnswer], {
    nullable: true,
  })
  selectedAnswer?: TestCase1SelectedAnswer[] = [];

  @Field({
    nullable: true,
  })
  isFinished?: boolean = false;
}

@ObjectType()
export class TestGraphqlWsGame {
  @Field((type) => String, {
    defaultValue: new Date(),
    nullable: true,
  })
  createdAt: Date;

  @Field((type) => Int, { defaultValue: 20 })
  limitedTime: number;

  @Field((type) => String, {
    defaultValue: new Date(Date.now() + 20 * 1000 * 60),
    nullable: true,
  })
  expireAt: Date;

  @Field()
  phase: string = "sampleLastBefore";

  @Field()
  testType: string = "Waiting";

  @Field((type) => TestGraphqlWsGameTestCase2, { nullable: true })
  TestCase2?: TestGraphqlWsGameTestCase2;

  @Field((type) => TestGraphqlWsGameTestCase3, { nullable: true })
  TestCase3?: TestGraphqlWsGameTestCase3;

  @Field((type) => TestGraphqlWsGameTestCase1, { nullable: true })
  TestCase1?: TestGraphqlWsGameTestCase1;
}

@ObjectType()
export class TestGraphqlWsEntities {
  @Field((type) => String, { nullable: true })
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  statement: string = "waiting";

  @Field()
  type: string;

  @Field()
  stringOption1: string;

  @Field((type) => [TestGraphqlWsPeople])
  people: TestGraphqlWsPeople[];

  @Field((type) => Float)
  numberOption1: number;

  @Field((type) => TestGraphqlWsFilter, { nullable: true })
  filter?: TestGraphqlWsFilter;

  @Field((type) => [TestGraphqlWsPeople], { nullable: true })
  peopleLooked?: TestGraphqlWsPeople[] = [];

  @Field((type) => TestGraphqlWsobjectOption1, { nullable: true })
  objectOption1?: TestGraphqlWsobjectOption1;

  @Field((type) => TestGraphqlWsGame, { nullable: true })
  game?: TestGraphqlWsGame;
}
