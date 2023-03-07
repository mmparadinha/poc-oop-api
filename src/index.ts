import cors from "cors";
import express, { json } from "express";
import productsRouter from './routes/productsRoutes';

const app = express();

app.use(cors());
app.use(json());

app.use(productsRouter);

const port = process.env.PORT || 5001;

app.listen(port, () =>
  console.log(`Server running in port: ${port}`)
);
