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


## Steps of building the project:
1. npx create-next-app@latest --ts (with ESLint, Tailwind, src dir, app router)
2. Setting up shadcn/ui -> npx shadcn-ui@latest init (global css -> src/app/globals.css, rest are default options)
3. npx shadcn-ui@latest add button


### Prisma & PlanetScale
4. Setting up Prisma PlanetScale Database on PlanetScale website
5. Setting up Prisma -> npm i prisma --save-dev, npm i @prisma/client, npx prisma init --datasource-provider mysql
6. Putting the PlanetScale details in the .env file
7. Installing the Prisma VS Code extension to recognize Prisma in VS Code. 
8. Creating Prisma client instance for using it with db in db.ts
8. Creating the schema.prisma and pushing it to PlanetScale database using npx prisma db push, npx prisma studio(for seeing the database tables)


### NextAuth implementation
9. npm i next-auth @next-auth/prisma-adapter(For nextAuth to interact with the database)
10. In the auth.ts, writing the callbacks to be implemented then writing the providers
11. Setting up the google cloud project for google oauth
12. Creating the /api/auth/[...nextauth]/route.ts -> Basically what it does is -> Any route that comes into /api/auth will be handled by this file including all the google callbacks and google redirects


### Navbar Designing
13. Changing the fonts, classes of overall page by changing the layout.tsx in the app directory
14. Creating the Navbar component, creating the getAuthSession func in the auth.ts
15. Creating other components like SignInButton.tsx, UserAccountNav.tsx, UserAvatar.tsx
16. Adding npx shadcn-ui@latest add dropdown-menu avatar


### Working on Themes
17. npm install next-themes, following the docs for next13 dark mode(From shadcn-ui), wrapping the whole app inside Provider component in layout.tsx
18. Creating the ThemeToggle component, adding it to the Navbar component


### Create Page
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


### Create Chapters Page
29. Creating the Create Chapters page - where we will create the chapters from the youtube api, create ConfirmChapters component inside it & creating the ChapterCard component, using lucide icons in between.
30. Creating the backend route for generating chapters video links, summary, questions, etc in the /api/chapter/getInfo
31. Using userefs and some other complex stuff for each of the ChapterCard and using react query to fetch the data for each of the ChapterCard
32. Getting the youtube api key from the google cloud console, creating searchYoutube function in the youtube.ts from where we are fetching the youtube video links and npm i youtube-transcript for getting the youtube transcript from the video id
33. Creating the getQuestionsFromTranscript func in youtube.ts, then saving the questions and updating the units with videoId, summary on the database in the /api/chapter/getInfo route
34. Working on setting the completed chapters and turning the chapter card green/red accordingly(detailed commenting inside the code) in the ChapterCard.tsx, ConfirmChapters.tsx


### Course Page
35. Creating the Course page in the "app/course/[...slug]/page.tsx" directory, creating the CourseSideBar component
36. Creating the MainVideoSummary component and the QuizCards component - npx shadcn-ui@latest add radio-group(For the quiz mcq)
37. Creating the Previous and next buttons in the course page


### Gallery Page
38. Creating the Gallery page in the "app/gallery/page.tsx" directory, and creating the GalleryCourseCard component
39. Changing the next config, adding the s3.us-west-2(for unsplash images)


### UI of the Subscription
40. Creating SubscriptionAction component and adding it inside the CreateCourseForm.tsx component
41. Using useSession hook from next-auth to get the user session but for this we need to wrap the children inside the SessionProvider in the layout.tsx
42. npx shadcn-ui@latest add progress -> For the progress bar in the SubscriptionAction component


### Stripe Payment Gateway
43. Getting the STRIPE_SECRET_KEY from the stripe dashboard and adding it to the .env file
44. Creating the "/api/stripe/route.ts", also creating stripe.ts inside lib folder
45. npm i stripe, creating stripe instance in stripe.ts
46. Writing the code for Get request in the "/api/stripe/route.ts" for redirecting to the Stripe page(For handling subscriptions)
47. Creating the handleSubscribe func in the SubscriptionAction component to redirect to the stripe page
48. creating the webhook route in the "/api/webhook/route.ts" path
49. Downloaded the stripe cli for windows by following the instructions, then testing stripe in local environment, getting the STRIPE_WEBHOOK_SECRET from the powershell and using it in the .env file(For better understanding, watch the video)
50. Creating the settings page and creating the checkSubscription func in the subscription.ts to check if the user is subscribed or not
51. Creating the SubscriptionButton component and including it in the settings page
52. Using the checkSubscription func in the create page to show/hide the SubscriptionAction component


53. Creating the Loading component for every page


### Digital Ocean Deployment
54. We are not deploying our website to vercel since vercel free tier has 10 sec for serverless function execution timeout but we need more, so we are deploying our website to digital ocean
55. Copying the dockerfile from the example given in nextjs docs
56. Accessing the digital ocean vps in the powershell with the command ssh root@68.183.244.160 & entering the droplet password
57. Generating our SSH Key for the digital ocean droplet so that github can trust the vps - ssh-keygen -t rsa -b 8192
58. The above command will generate 2 keys -> id_rsa & id_rsa.pub, copy the public key to github so that github can give access to the digital ocean vps
59. Cloning the git repo inside the vps, sudo apt update, sudo apt install docker docker-compose
60. Creating the docker-compose.yml file in the root dir and pushing it to github, then git pull inside the vps
61. docker-compose up --build -d -> To run the docker in our vps
62. nginx will help link up the internal port 3000 to the external ip(68.183.244.160), such that when we try to access the external ip, we will also be able to access the internal port 3000
63. Changing the next-config and the build command in package.json, copying the environmental variables inside the vps, starting the docker again

64. sudo apt install nginx, sudo service nginx status -> default nginx port is 80, we will link it with 3000 to serve our nextjs site and delete the html content(nginx help us accessing the ip address)
65. COme back to the root dir, cd etc/nginx/sites-enabled, vim default
66. Delete the text inside default and change it with the custom one - server{
        server_name 165.232.185.129;
        location / {
                proxy_pass http://localhost:3000;
        }
}
67. sudo nginx -t(for checking the format of the nginx file)
68. sudo service nginx restart, sudo service nginx status -> Now we can access the ip address and see our website
69. Linking the IP address with the domain name -> NameCheap domain setup -> Adding the A record with the ip address, adding the CNAME record with the ip address and some other stuff
70. Getting the free SSL with certbot nginx - sudo snap install --classic certbot, sudo ln -s /snap/bin/certbot /usr/bin/certbot
71. Changing the default file's server_name to the domain name, sudo certbot --nginx 
72. Changing the NEXTAUTH_URL in .env file for nextauth to work, also changing the callback url in google cloud console
73. Also create a new STRIPE_API_KEY with the domain name (by following the video) in the stripe dashboard and add it to the .env file of the vps


### CI/CD Pipeline
74. What we have seen that, when we change the code, we have to manually go and stop the docker and change in the code in the vps and restart the docker again -> To automate this process we will be using ci/cd
75. Creating a deploy.yml file in .github/workflows folder
76. Downloading the 2 extensions, docker & github actions in our vs code
77. Adding the env variables in the github enivronment secrets
78. cat id_rsa.pub > authorized_keys -> For giving access of the github to the vps
79. Now changing some code to see our ci/cd pipeline in action.
80. I spent a lot of time in fixing the bug in the github actions -> Actually there was a problem in the permissions of the authorized_keys file, so I changed the permissions of the authorized_keys file to 600 and it worked, command i used -> sudo chmod 600 ~/.ssh/authorized_keys

https://souryax-courses.debsouryadatta.me