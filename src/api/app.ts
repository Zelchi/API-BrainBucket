import express from "express";
import cors from "cors";
import { AppDataSource } from "../database/config/dataSource";
import "dotenv/config";

const app = express();
app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:5500", "https://127.0.0.1:5500"],
}

app.use(cors(corsOptions));

import { ContaRouter } from "./Conta/ContaRouter";
app.use("/conta", ContaRouter);

import { TarefaRouter } from "./Tarefa/TarefaRouter";
app.use("/tarefa", TarefaRouter);

AppDataSource.initialize().then(() => {
    console.log("Conectado ao banco de dados")
}).catch((error) => {
    console.log("Erro ao conectar ao banco de dados", error)
});

export default app;