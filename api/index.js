import express, { json } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

// Managing ENVs ------------------------------------------------------------------||
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.port || 5500;

// Routes-import -------------------------------------------------------------------||
import taskRoute from "../routes/taskRoutes.js";

// Middlewares ---------------------------------------------------------------------||
const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(resolve(__dirname, "../client/dist"))); //commonjs
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(json());

// Testing Server -------------------------------------------------------------------||
app.get("/api/v1", (req, res) => {
  res.send("<h1>Welcome to backend Server</h1>");
});

app.get("/api/v1/test01", (req, res) => {
  res.json({ msg: 'CORS not blocked'});
});

// Routes-Main-API ------------------------------------------------------------------||
app.use("/api/v1/tasks", taskRoute);

// Serving FE-App client/dist folder ------------------------------------------------||
app.get("*", (req, res) => {
  //   res.sendFile(resolve(__dirname, "../client/dist", "index.html"));
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

// General Error router -------------------------------------------------------------||
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found!" });
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
  });
};

startServer();

export default app;
