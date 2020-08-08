import express, { Request, Response } from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes)



app.listen(3333, () => {
  console.log("API initialized in port 3333");
});
