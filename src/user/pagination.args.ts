import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType() // ArgsType: This decorator is used to define a class as an argument type for GraphQL queries or mutations. It allows you to group related arguments into a single object that can be passed to your resolvers.
export class PaginationArgs {
  @Field(() => Int, { nullable: true }) // Field: This decorator is used to define fields within the argument type. Each field corresponds to a property of the class that will be exposed as an argument in the GraphQL API.
  limit?: number;

  @Field(() => Int, { nullable: true })
  offset?: number;
}

// limit:
// Decorated with @Field(() => Int, { nullable: true }), this field specifies that it is of type Int in GraphQL and can be null. The nullable: true option indicates that the client can choose not to provide this argument.
// The limit property is used to specify the maximum number of items to return in a paginated response. For example, if a client wants to retrieve only 10 items from a larger dataset, they would set this value to 10.

// offset:
// Similar to limit, this field is also decorated with @Field(() => Int, { nullable: true }). It represents an integer value that can also be null.
// The offset property is used to specify the starting point from which to return items. For instance, if a client wants to skip the first 20 items and start retrieving results from the 21st item onward, they would set this value to 20
