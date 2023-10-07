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


##Steps of building the project:
1. npx create-next-app@latest --ts (with ESLint, Tailwind, src dir, app router)
2. Setting upshadcn/ui > npx shadcn-ui@latest init (global css -> src/app/globals.css, rest are default options)
3. npx shadcn-ui@latest add button


###Prisma & PlanetScale
4. Setting up Prisma PlanetScale Database on PlanetScale website
5. Setting up Prisma -> npm i prisma --save-dev, npm i @prisma/client, npx prisma init --datasource-provider mysql
6. Putting the PlanetScale details in the .env file
7. Installing the Prisma VS Code extension to recognize Prisma in VS Code. 
8. Creating Prisma client instance for using it with db in db.ts
8. Creating the schema.prisma and pushing it to PlanetScale database using npm prisma db push, npx prisma studio(for seeing the database tables)


###NextAuth implementation
9. npm i next-auth @next-auth/prisma-adapter(For nextAuth to interact with the database)
10. In the auth.ts, writing the callbacks to be implemented then writing the providers
11. Setting the the google cloud project for google oauth
12. Creating the /api/auth/[...nextauth]/route.ts -> Basically what it does is -> Any route that comes into /api/auth will be handled by this file including all the google callbacks and google redirects


###Navbar Designing
13. Changing the fonts, classes of overall page by changing the layout.tsx in the app directory
14. Creating the Navbar component, creating the getAuthSession func in the auth.ts
15. Creating other components like SignInButton.tsx, UserAccountNav.tsx, UserAvatar.tsx
16. Adding npx shadcn-ui@latest add dropdown-menu avatar


###Working on Themes
17. npm install next-themes, following the docs for next13 dark mode(From shadcn-ui), wrapping the whole app inside Provider component in layout.tsx
18. Creating the ThemeToggle component, adding it to the Navbar component


###Create Page
19. Creating the Create Page, creating the CreateCourseForm component(Using shadcn form -> React hook form with zod validator, npx shadcn-ui@latest add form)
20. npm i @hookform/resolvers , npx shadcn-ui@latest add input separator
21. For slight animation -> npm i framer-motion

22. Writing the models for Course, Unit and Chapters and Questions in the schema.prisma, then pushing the changes, npx prisma studio for opening the prisma studio
23. Creating endpoints for creating the course -> /api/course/createChapters
24. Sometimes the response given by the openai have some json format problems so we will be using strict gpt function(made by someone else) to rectify the json format according to the format we want, npm i openai@3.3.0
25. Writing the code for the endpoint to create the course
26. Getting the UNSPLASH_API_KEY and using it in the getUnsplashImage function(in the unsplash.ts) to generate the image related to the course, npm i axios(for fetching the image from unsplash)
27. Back to frontend, using react query -> npm i @tanstack/react-query, Setting up the react-query in the Providers.tsx & CreateCourseForm.tsx
28. npx shadcn-ui@latest add toast


###Create Chapters Page
29. Creating the Create Chapters page - where we will create the chapters from the youtube api, create ConfirmChapters component inside it & creating the ChapterCard component, using lucide icons in between.
30. Creating the backend route for generating chapters video links, summary, questions, etc in the /api/chapter/getInfo
31. Using userefs and some other complex stuff for each of the ChapterCard and using react query to fetch the data for each of the ChapterCard
32. Getting the youtube api key from the google cloud console, creating searchYoutube function in the youtube.ts from where we are fetching the youtube video links and npm i youtube-transcript for getting the youtube transcript from the video id
33. Creating the getQuestionsFromTranscript func in youtube.ts, then saving the questions and updating the units with videoId, summary on the database in the /api/chapter/getInfo route
34. Working on setting the completed chapters and turning the chapter card green/red accordingly(detailed commenting inside the code) in the ChapterCard.tsx, ConfirmChapters.tsx


###Course Page
35. Creating the Course page in the "app/course/[...slug]/page.tsx" directory, creating the CourseSideBar component
36. Creating the MainVideoSummary component and the QuizCards component - npx shadcn-ui@latest add radio-group(For the quiz mcq)
37. Creating the Previous and next buttons in the course page


###Gallery Page
38. Creating the Gallery page in the "app/gallery/page.tsx" directory, and creating the GalleryCourseCard component
39. Changing the next config, adding the s3.us-west-2(for unsplash images)


###Stripe Payment Gateway
40. Creating SubscriptionAction component and adding it inside the CreateCourseForm.tsx component
41. Using useSession hook from next-auth to get the user session but for this we need to wrap the children inside the SessionProvider in the layout.tsx
42. npx shadcn-ui@latest add progress -> For the progress bar in the SubscriptionAction component
43. Getting the STRIPE_SECRET_KEY from the stripe dashboard and adding it to the .env file
44. Creating the "/api/stripe/route.ts", also creating stripe.ts inside lib folder