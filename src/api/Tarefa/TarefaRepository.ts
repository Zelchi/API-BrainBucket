import { Repository } from "typeorm";
import { TarefaEntity } from "./TarefaEntity";
import { ContaEntity } from "../Conta/ContaEntity";

export class TarefaRepository {
    private database: Repository<TarefaEntity>;

    constructor(repository: Repository<TarefaEntity>) {
        this.database = repository;
    }

    buscaTarefa = async (TarefaId: number, criadorId: number): Promise<TarefaEntity | null> => {
        return await this.database.findOne({
            where: { id: TarefaId, criador: { id: criadorId } as ContaEntity }
        });
    }

    buscaTarefas = async (criadorId: number): Promise<TarefaEntity[] | null> => {
        const teste = await this.database.find({
            where: { criador: { id: criadorId } as ContaEntity }
        });

        console.log(teste);

        return teste;
    }

    criaTarefa = async (conteudo: string, criador: number) => {
        const tarefa = new TarefaEntity(conteudo, { id: criador } as ContaEntity);
        return await this.database.save(tarefa);
    }

    atualizaTarefa = async (idTarefa: number, novoConteudo: string): Promise<TarefaEntity | null> => {
        let tarefa = await this.database.findOne({
            where: { id: idTarefa }
        });

        if (!tarefa) {
            return null;
        }

        tarefa.conteudo = novoConteudo;
        console.log(tarefa);

        return await this.database.save(tarefa);
    }

    deletaTarefa = async (tarefaId: number, criadorId: number): Promise<TarefaEntity | null> => {
        const tarefa = await this.database.findOne({
            where: { id: tarefaId, criador: { id: criadorId } as ContaEntity }
        });
        if (tarefa) {
            await this.database.delete({ id: tarefaId, criador: { id: criadorId } as ContaEntity });
        }
        return tarefa;
    }
}