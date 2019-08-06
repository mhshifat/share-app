/* eslint-disable no-console */
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import DbConnection from "./database/conn";
import { port, baseUrl } from "./config/config";
import { globalMiddleware } from "./middlewares/appMiddlewares";
import appRoutes from "./routes/api/v1/appRoutes";
import shareRoutes from "./routes/api/v1/shareRoutes";
import fileRoutes from "./routes/api/v1/fileRoutes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.use("/api/v1/files", fileRoutes);
app.use("/api/v1/shares", shareRoutes);
app.use("/", appRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.use(globalMiddleware);

DbConnection().then(() => {
  app.listen(port, () => {
    // eslint-disable-next-line indent
    console.log(`[ SHARE ] >>>>> The server is running on ${baseUrl}!`);
  });
});
