import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // This decorator is used to define a class as a GraphQL object type. It marks the class so that GraphQL can recognize it as part of the schema.
export class User {
  @Field(() => Int) // This decorator is used to define fields within the object type. Each field corresponds to a property of the class that will be exposed in the GraphQL schema.
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
