import cors from "cors";
import express, { json } from "express";
import categoriesRouter from './routes/categoriesRoutes';
import productsRouter from './routes/productsRoutes';

const app = express();

app.use(cors());
app.use(json());

app.use(productsRouter);
app.use(categoriesRouter);

const port = process.env.PORT || 5001;

app.listen(port, () =>
  console.log(`Server running in port: ${port}`)
);
