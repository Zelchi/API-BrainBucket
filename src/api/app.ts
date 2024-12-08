import express from "express";
import { AppDataSource } from "../database/config/dataSource";
import { ContaRouter } from "./Conta/ContaRouter";

const app = express();
app.use(express.json());

app.use("/conta", ContaRouter);

AppDataSource.initialize().then(() => {
    console.log("Conectado ao banco de dados")
}).catch((error) => {
    console.log("Erro ao conectar ao banco de dados", error)
});

export default app;