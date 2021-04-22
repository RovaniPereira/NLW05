import express from "express";

const app = express();

import './database';
import {routes} from "./routes";

app.use(express.json());
app.use(routes);

app.listen(3333, ()=>console.log("O servidor está rodando na porta 3333"));