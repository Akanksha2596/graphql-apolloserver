import { ObjectType, Field, ID, InputType} from "type-graphql";   /// InputType sinputtype for mutation

@ObjectType()
export class DogAttribute {
    @Field(() => ID)
    key: string | undefined;

    @Field(() => String)
    value: string | undefined;
}

@ObjectType()
export class Dog {
  @Field(() => ID)
  name: string | undefined;

  @Field(() => [DogAttribute])
  attributes: DogAttribute[] | undefined;

  @Field(() => [String])
  description: string[] | undefined;

  @Field(() => String)
  image: string | undefined;

  @Field(() => Number)
  ageInWeeks: number | undefined;

  @Field(() => String)
  sex: string | undefined;

  @Field(() => String)
  breed: string | undefined;

  @Field(() => String)
  color: string | undefined;

  @Field(() => Number)
  fee: number | undefined;

  @Field(() => Number)
  weight: number | undefined;

  @Field(() => String)
  availableDate: string | undefined;
}

@InputType()
export class DogAttributeInput {
  @Field(() => ID)
  key: string | undefined;

  @Field(() => String)
  value: string | undefined;
}

@InputType()
export class DogInput {
  @Field(() => String)
  name: string | undefined;

  @Field(() => [DogAttributeInput])
  attributes: DogAttributeInput[] | undefined;

  @Field(() => [String])
  description: string[] | undefined;

  @Field(() => String)
  image: string | undefined;

  @Field(() => Number)
  ageInWeeks: number | undefined;

  @Field(() => String)
  sex: string | undefined;

  @Field(() => String)
  breed: string | undefined;

  @Field(() => String)
  color: string | undefined;

  @Field(() => Number)
  fee: number | undefined;

  @Field(() => Number)
  weight: number | undefined;

  @Field(() => String)
  availableDate: string | undefined;
}

@InputType()
export class UpdateDogInput {
  @Field(() => [DogAttributeInput], { nullable: true })
  attributes?: DogAttributeInput[];

  @Field(() => [String], { nullable: true })
  description?: string[];

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Number, { nullable: true })
  ageInWeeks?: number;

  @Field(() => String, { nullable: true })
  sex?: string;

  @Field(() => String, { nullable: true })
  breed?: string;

  @Field(() => String, { nullable: true })
  color?: string;

  @Field(() => Number, { nullable: true })
  fee?: number;

  @Field(() => Number, { nullable: true })
  weight?: number;

  @Field(() => String, { nullable: true })
  availableDate?: string;
}
