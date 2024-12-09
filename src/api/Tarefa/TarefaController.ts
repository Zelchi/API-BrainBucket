import { Response, Request, NextFunction } from "express";
import { AppDataSource } from "../../database/config/dataSource";
import { TarefaRepository } from "./TarefaRepository";
import { TarefaService } from "./TarefaService";
import jwt from "jsonwebtoken";

const tarefaRepository = new TarefaRepository(AppDataSource.getRepository("TarefaEntity"));
const tarefaService = new TarefaService(tarefaRepository);

export class TarefaController {

    autenticar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const pegaToken = req.headers.authorization;
        const token = pegaToken?.split(" ")[1];

        if (!token) {
            res.status(401).send({ mensagem: "Token não fornecido" });
            return;
        }

        jwt.verify(token, process.env.KEY as string, (err) => {
            if (err) {
                res.status(401).send({ mensagem: "Token inválido" });
                return;
            } else {
                next();
            }
        });
    }

    pegarIdAutorizado = async (req: Request, res: Response): Promise<number> => {
        const pegaToken = req.headers.authorization;
        const token = pegaToken?.split(" ")[1];

        const criador = jwt.decode(token as string) as { id: number };
        return criador.id;
    }

    mostrarTarefas = async (req: Request, res: Response): Promise<void> => {
        const criadorId = await this.pegarIdAutorizado(req, res);

        const tarefas = await tarefaService.buscaTarefas(criadorId);
        res.status(200).json(tarefas);
    }

    criarTarefa = async (req: Request, res: Response): Promise<void> => {
        const tarefa = req.body;

        if (!tarefa.conteudo) {
            res.status(400).json({ mensagem: "Conteúdo da tarefa não fornecido" });
            return;
        }

        tarefa.criador = await this.pegarIdAutorizado(req, res);

        const novaTarefa = await tarefaService.criaTarefa(tarefa);
        res.status(201).json(novaTarefa);
    }

    atualizarTarefa = async (req: Request, res: Response): Promise<void> => {
        const tarefaId = req.body.id;
        const tarefaConteudo = req.body.conteudo;

        if (!tarefaId) {
            res.status(400).json({ mensagem: "ID da tarefa não fornecido" });
            return;
        }

        const tarefaAtualizada = await tarefaService.atualizaTarefa(tarefaId, tarefaConteudo);
        res.status(200).json(tarefaAtualizada);
    }

    deletarTarefa = async (req: Request, res: Response): Promise<void> => {
        const criadorId = await this.pegarIdAutorizado(req, res);
        const tarefaId = req.body.id;

        const tarefaDeletada = await tarefaService.deletaTarefa(tarefaId, criadorId);
        res.status(200).json(tarefaDeletada);
    }
}