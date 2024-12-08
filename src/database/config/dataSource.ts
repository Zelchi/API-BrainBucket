import "reflect-metadata";
import { DataSource } from "typeorm";
import { ContaEntity } from "../../api/Conta/ContaEntity";
import { TarefaEntity } from "../../api/Tarefa/TarefaEntity";

// export const AppDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",

//     port: 3002, // Porta do banco de dados
//     username: "root", // Usuário do banco 
//     password: "sua_senha", // Senha do banco
//     database: "nome_do_banco", // Nome do banco de dados

//     synchronize: false, // Atualiza o banco automaticamente
//     logging: false, // Define se logs serão exibidos

//     entities: [ContaEntity, TarefaEntity],
// });

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/db.sqlite",
    entities: [ContaEntity, TarefaEntity],
    synchronize: true,
});