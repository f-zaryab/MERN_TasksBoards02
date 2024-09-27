# MERN Project

MERN based kanban board with complete authentication. Backend-app in root folders and frontend client in client folder.

## Libraries installed

- [Express.js](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [React-Vite](https://v3.vitejs.dev/guide/)
- [React-Router-Dom-6](https://reactrouter.com/en/main/start/tutorial)
- [Mongoose](https://mongoosejs.com/docs/index.html)

### How to make app deployment ready

1. server-file must be ready and can be tested via a test api route
2. Frontend-app must be in client folder and navigating into client folder may start the app via suitable command. It must be able to run in dev mode and it can be built i.e. dist folder must be created
3. In server-file, following middleware may be used to fetch the static files. Type-module syntex is used.

   ```js
   import path, { dirname } from "path";
   import { fileURLToPath } from "url";

   const __dirname = dirname(fileURLToPath(import.meta.url));

   // For type-commonjs:
   app.use(express.static(resolve(__dirname, "../client/dist")));

   // For type-module:
   app.use(express.static(path.resolve(__dirname, "./client/dist")));

   // alternative approach
   app.use(express.static(path.resolve(__dirname, "../public")));
   ```

4. In the server-file, following get method may be used to fetch the static files. The res.sendFile must be below the api routes but above the generic error route in server.js

   ```js
   // For type-commonjs:
   res.sendFile(resolve(__dirname, "../client/dist", "index.html"));

   // For type-module:
   res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));

   // alternative approach
   res.sendFile(path.resolve(__dirname, "../public", "index.html"));
   ```

5. Add build command in package.json of server side. The first one is for debugging in dev mode. Ignore the second one, last is the crucial one. This would be listed in build command in hosting platforms as well.
   ```js
    "scripts": {
    "dev": "node --watch api/index.js",
    "setup-project": "npm i && cd client && npm i",
    "setup-production-app": "npm i && cd client && npm i && npm run build"
   },
   ```

**_The alternative approach is to build the react app in dist folder, and then manually import the contents of dist folder in the manually created public folder at the root and serving static files from there._**

6. For running the app, cmd would be node api/index.js. This has to be in api folder for vercel deployment issue. Vercel only recognizes server when server is in api folder at the root.
7. Add vercel.json file in the root directory.
   ```js
   {
      "routes": [
         {
            "src": "/api/(.*)",
            "dest": "/api/index.js"
         },
         {
            "src": "/[^.]+",
            "dest": "/"
         }
      ]
   }
   ```
8. The final step is depoyment settings on vercel. Push all code on github. Import the repo on vercel by creating new project. Add the required ENVs. For the build command, use 'setup-production-app' which is actually the script to install all dependencies in express app and react app. The other cruciall step is Output Directory. This would be be client/dist. This is imperative to add otherwise it would server from the public folder where stale builds are present (the right term would be manual build which needs to copy-paste everytime the build is made). Doing this would server fresh build from dist folder which is always created when project is deployed.

Hopefully, following these steps would successfully deploy a working MERN-App on vercel.

### Debugging Issues

- [Vercel.json issue at deployment](https://stackoverflow.com/questions/76835419/why-when-i-deploy-in-vercel-mern-app-shows-me-error-404): For vercel deployment, vercel.json is crucial for defining frontend paths and backend-express paths.
- [React-Hook-Form](https://www.freecodecamp.org/news/how-to-build-forms-in-react/). More links: [Link1](https://blog.logrocket.com/react-hook-form-complete-guide/), [Link2](https://dev.to/franciscomendes10866/react-form-validation-with-react-hook-form-and-yup-4a98)
