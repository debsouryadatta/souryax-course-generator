This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Steps of building the project:
1. npx create-next-app@latest --ts (with ESLint, Tailwind, src dir, app router)
2. Setting upshadcn/ui > npx shadcn-ui@latest init (global css -> src/app/globals.css, rest are default options)
3. npx shadcn-ui@latest add button
4. Setting up Prisma PlanetScale Database on PlanetScale website
5. Setting up Prisma -> npm i prisma --save-dev, npm i @prisma/client, npx prisma init --datasource-provider mysql
6. Putting the PlanetScale details in the .env file
7. Installing the Prisma VS Code extension to recognize Prisma in VS Code. 
8. Creating Prisma client instance for using it with db in db.ts
8. Creating the schema.prisma and pushing it to PlanetScale database using npm prisma db push


<!-- NextAuth implementation -->
9. npm i next-auth @next-auth/prisma-adapter(For nextAuth to interact with the database)
10. In the auth.ts, writing the callbacks to be implemented then writing the providers
11. Setting the the google cloud project for google oauth
12. Creating the /api/auth/[...nextauth]/route.ts -> Basically what it does is -> Any route that comes into /api/auth will be handled by this file including all the google callbacks and google redirects


<!-- Navbar Designing -->
13. Changing the fonts, classes of overall page by changing the layout.tsx in the app directory
14. Creating the Navbar component, creating the getAuthSession func in the auth.ts
15. Creating other components like SignInButton.tsx, UserAccountNav.tsx
16. Adding npx shadcn-ui@latest add dropdown-menu