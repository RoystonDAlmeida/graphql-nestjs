# NestJS GraphQL API

This project is a simple GraphQL API built with NestJS that allows clients to query and mutate user data efficiently. It demonstrates the use of GraphQL schemas, resolvers, Data Transfer Objects (DTOs), pagination, filtering, and custom decorators for authorization.

## Features

- Define schemas and resolvers for user entities.
- Implement pagination and filtering in queries.
- Use custom decorators for authorization (optional).
- Interactive GraphQL Playground for testing queries and mutations.

## Technologies Used

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript](https://www.typescriptlang.org)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

-  Clone the repository:
  ```bash
  git clone https://github.com/RoystonDAlmeida/graphql-nestjs.git
  cd graphql-nestjs
  ```

- Install dependencies:
  ```bash
  npm install
  ```

### Running the Application

1. Start the server:
  ```bash
  npm run start
  ```

2. Open your browser and navigate to `http://localhost:3000/graphql` to access the GraphQL Playground.

## Usage

### Adding a User

To add a user, use the following mutation in the GraphQL Playground:

  ```graphql
  mutation {
    addUser(name: "John Doe", email: "john@example.com") {
      id
      name
      email
    }
  }
  ```


### Querying Users with Pagination

To retrieve users with pagination, use the following query:

  ```graphql
    query {
      getUsers(limit: 5, offset: 0) {
        id
        name
        email
      }
    }
  ```


### Filtering Users

To filter users by name, you can modify the `getUsers` query as follows (if filtering is implemented):

  ```graphql
  query {
    getUsers(limit: 5, offset: 0, name: "John") {
      id
      name
      email
    }
  }
  ```

## Custom Decorators (Optional)

You can implement custom decorators for authorization by defining them in your project. This feature is not included in this basic implementation but can be added as needed.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to create an issue or submit a pull request.

## Acknowledgments

- Special thanks to the NestJS community for their excellent documentation and support.