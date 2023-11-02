# Bot Factory - AI Chatbot Creation Tool

Bot Factory is a dynamic application designed for crafting AI chatbots with custom purposes and unique character attributes. By leveraging the power of Next.js, Prisma, Langchain, and the OpenAI API, this tool simplifies the process of generating intelligent chatbots tailored to specific requirements and distinctive personality nuances.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [License](#license)

## Getting Started

These instructions will help you get the Bot Factory application up and running on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.4.10 or higher)
- [npm](https://www.npmjs.com/) (v18.2.20 or higher)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional but recommended)

## Installation

1. Clone this repository:

   ```shell
   git clone <repository-url>
   cd bot-factory
   ```

2. Install project dependencies:

   If you prefer using npm:

   ```shell
   npm install
   ```

   If you prefer using Yarn:

   ```shell
   yarn install
   ```

## Usage

To start the Bot Factory application locally, use the following command:

```shell
npm run dev
# or
yarn dev
```

This will start the development server, and you can access the application in your browser at `http://localhost:3000`.

## Configuration

To run the Bot Factory application successfully, you'll need to configure environment variables. Create a `.env.local` file based on the provided `.env.example` and fill in the required values for the following variables:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`
- `DATABASE_URL`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `PINECONE_INDEX`
- `PINECONE_ENVIRONMENT`
- `PINECONE_API_KEY`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `OPENAI_API_KEY`
- `REPLICATE_API_KEY`

Ensure that you've obtained the necessary API keys and secrets for the services you plan to use.

## Dependencies

Here are some of the key dependencies used in the Bot Factory project:

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Langchain](https://www.npmjs.com/package/langchain)
- [OpenAI API](https://beta.openai.com/)
- And more, as listed in the `package.json` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
