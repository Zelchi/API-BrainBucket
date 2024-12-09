import { TarefaRepository } from "./TarefaRepository";

export class TarefaService {
    private database: TarefaRepository;
    constructor(repository: TarefaRepository) {
        this.database = repository;
    }

    buscaTarefa = async (TarefaId: number, criadorId: number) => {
        return await this.database.buscaTarefa(TarefaId, criadorId);
    }

    buscaTarefas = async (criadorId: number) => {
        return await this.database.buscaTarefas(criadorId);
    }

    criaTarefa = async (tarefa: any) => {
        const { conteudo, criador } = tarefa;
        return await this.database.criaTarefa(conteudo, criador);
    }

    atualizaTarefa = async (tarefaId: number, conteudo: string) => {
        return await this.database.atualizaTarefa(tarefaId, conteudo);
    }

    deletaTarefa = async (tarefaId: number, criadorId: number) => {
        return await this.database.deletaTarefa(tarefaId, criadorId);
    }
}