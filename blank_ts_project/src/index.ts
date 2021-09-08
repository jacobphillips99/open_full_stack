import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  //   res.send("<h1>Hello from the TypeScript world!</h1>");
  //   res.send({ thing: 5 });
  res.sendFile();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
