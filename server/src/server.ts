import express, { Request, Response } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.get('/test', (req: Request, res: Response) => {
  console.log("Isso e um test!");
  return res.json({
    text: "text",
    codigo: 1010
  });
})

app.listen(3333, () => {
  console.log("Its alive on port 3333")
});