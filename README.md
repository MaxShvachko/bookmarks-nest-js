# Bookmarks Nest JS APP

The Bookmarks App is a powerful and user-friendly application that allows you to organize and manage your favorite web links effortlessly. With its intuitive interface and robust features, the app simplifies bookmarking and retrieval, providing a seamless browsing experience.

## Key Features

- **Authorization via Email:** Securely create an account and log in using your email address. Rest assured that your data is protected and accessible only to you.

- **Bookmark Management:** Easily add, edit, and delete bookmarks with just a few clicks. Keep your collection up-to-date and neatly organized for quick access.

- **Search:** Find specific bookmarks instantly using the search function.

The Bookmarks App offers a seamless and efficient way to manage your online resources. Organize your digital life with ease and never miss an important link again.

Try the Bookmarks App today and experience a new level of convenience and productivity in your web browsing!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. Clone the repository.
2. Install the required dependencies by running `yarn install`.

## Usage

To run the project, use the following commands:

- `yarn start`: Start the project.
- `yarn start:dev`: Start the project in development mode with watch mode enabled.
- `yarn start:debug`: Start the project in debug mode with watch mode enabled.
- `yarn start:prod`: Start the project in production mode.

## Env Variables

| Name           | Example Value                                               | Description                                      |
|----------------|-------------------------------------------------------------|--------------------------------------------------|
| DATABASE_URL   | "postgresql://postgres:123@localhost:5434/nest?schema=public" | Database connection URL                          |
| JWT_SECRET     | "testJwt"                                                   | Secret key for JWT authentication                |
| POSTGRES_USER  | "postgres"                                                  | Username for PostgreSQL database                 |
| POSTGRES_PASSWORD | 123                                                   | Password for PostgreSQL database                 |
| POSTGRES_DB    | "nest"                                                      | Name of the PostgreSQL database                  |

This table provides a quick overview of the environment variables used in the application along with example values and short descriptions of their purpose.

## Scripts

The project comes with the following scripts:

- `prisma:dev:deploy`: Deploy Prisma migrations in development environment.
- `db:dev:rm`: Remove the development database container.
- `db:dev:up`: Start the development database container.
- `db:dev:restart`: Restart the development database container, deploy migrations after restart.
- `prisma:test:deploy`: Deploy Prisma migrations in test environment.
- `db:test:rm`: Remove the test database container.
- `db:test:up`: Start the test database container.
- `db:test:restart`: Restart the test database container, deploy migrations after restart.
- `studio:dev`: Launch Prisma Studio in development environment.
- `studio:test`: Launch Prisma Studio in test environment.
- `build`: Build the project.
- `format`: Format the source code using Prettier.
- `lint`: Lint the source code using ESLint.
- `test`: Run Jest tests.
- `test:watch`: Run Jest tests in watch mode.
- `test:cov`: Run Jest tests with coverage report.
- `test:debug`: Run Jest tests in debug mode.
- `pretest:e2e`: Restart the test database before running end-to-end tests.
- `test:e2e`: Run end-to-end tests in test environment.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.
