import { Response, Request } from "express";
import { AppDataSource } from "../../database/config/dataSource";
import { TarefaRepository } from "./ContaRepository";
import { TarefaService } from "./ContaService";

const tarefaRepository = new TarefaRepository(AppDataSource.getRepository("TarefaEntity"));
const tarefaService = new TarefaService(tarefaRepository);

export class TarefaController {
    
    

}