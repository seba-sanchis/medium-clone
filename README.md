# Blog - Publish your passions your way.

Headless CMS App built with a query languaje and managed from Hygraph, a dedicated Content Management System.

## Setups

Before you start, you will need to create the <code>.env</code> file in the root folder to connect to Hygraph.

Open the .env file and type the following variables:

```bash
    NEXT_PUBLIC_HYGRAPH_ENDPOINT = *add your Hygraph endpoint*
    HYGRAPH_TOKEN = *add your Hygraph token*
```

## Available Scripts

Install packages and all dependencies.

```bash
    npm i
```

Runs the app in the development mode.

```bash
    npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learn More

To learn more about this project, take a look at the following resources:

- [GraphQL](https://graphql.org/) - Data query language and data manipulation language for APIs, and a query runtime engine.
- [Hygraph](https://hygraph.com/) - Native GraphQL Headless CMS focused on Content Federation.
- [Next.js](https://nextjs.org/) - Web development framework providing React-based web applications with server-side rendering and static website generation.
- [React](https://reactjs.org/) - Frontend JavaScript library for building user interfaces based on components.
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework that it does not provide a series of predefined classes for elements.

## Deployment

Application hosted on AWS Lambda: https://blog.sebastiansanchis.com/
