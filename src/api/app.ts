import express from "express";
import cors from "cors";
import { AppDataSource } from "../database/config/dataSource";
import "dotenv/config";

const app = express();
app.use(express.json());

const corsOptions = {
    origin: "*",
}

app.use(cors(corsOptions));

import { ContaRouter } from "./Conta/ContaRouter";
app.use("/conta", ContaRouter);

import { TarefaRouter } from "./Tarefa/TarefaRouter";
app.use("/tarefa", TarefaRouter);

////////////////////////////////////////////////////////////////

app.get("/victor", (req, res) => {
    superConsole(req); // <-------- Ignore essa função
    const { email, senha } = req.body;

    if (email === "victor@email.com" && senha === "123") {
        res.status(200).send({ mensagem:"Login realizado com sucesso" });
    } else {
        res.status(401).send({ mensagem:"Credenciais inválidas" });
    }
});

////////////////////////////////////////////////////////////////

AppDataSource.initialize().then(() => {
    console.log("Conectado ao banco de dados")
}).catch((error) => {
    console.log("Erro ao conectar ao banco de dados", error)
});

export default app;

function superConsole(req: any) {
    console.log("Requisição recebida");
    console.log("Método: ", req.method);
    console.log("URL: ", req.url);
    console.log("Corpo: ", req.body);
    console.log("Query: ", req.query);
    console.log("Parâmetros: ", req.params);
    console.log("Cookies: ", req.cookies);
    console.log("Cabeçalhos: ", req.headers);
}
