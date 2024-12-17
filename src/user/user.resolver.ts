import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.entity';
import { PaginationArgs } from './pagination.args';

@Resolver(() => User)
export class UserResolver {
  private users: User[] = [];

  @Query(() => [User])
  getUsers(@Args() paginationArgs: PaginationArgs): User[] {
    const { limit = 10, offset = 0 } = paginationArgs;
    return this.users.slice(offset, offset + limit); //  slice method to return a subset of the users array based on the provided offset and limit.
  }

  @Mutation(() => User)
  addUser(@Args('name') name: string, @Args('email') email: string): User {
    const newUser = { id: this.users.length + 1, name, email };
    this.users.push(newUser);
    return newUser;
  }
}

// Imports
// Resolver: A decorator that marks the class as a GraphQL resolver. It allows the class to handle specific queries and mutations.
// Query: A decorator that defines a method as a GraphQL query. Queries are used to fetch data.
// Mutation: A decorator that defines a method as a GraphQL mutation. Mutations are used to modify data.
// Args: A decorator that allows you to define arguments for your queries and mutations.
// User: The user entity class that represents the structure of user data.
// PaginationArgs: The argument type for handling pagination parameters (limit and offset)
