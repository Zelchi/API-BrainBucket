import { Response, Request } from "express";
import { AppDataSource } from "../../database/config/dataSource";
import { ContaRepository } from "./ContaRepository";
import { ContaService } from "./ContaService";

const contaRepository = new ContaRepository(AppDataSource.getRepository("ContaEntity"));
const contaService = new ContaService(contaRepository);

export class ContaController {
    criarConta = async (req: Request, res: Response): Promise<void> => {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            res.status(400).json({ mensagem: "Dados inválidos" });
        } else {
            const conta = await contaService.criaConta(nome, email, senha);
            if (conta) {
                res.status(201).json({ mensagem: "Conta criada com sucesso!" });
            } else {
                res.status(400).json({ mensagem: "Conta já existente" });
            }
        }
    }

    loginConta = async (req: Request, res: Response): Promise<void> => {
        const { email, senha } = req.body;

        if (!email || !senha) {
            res.status(400).json({ mensagem: "Dados inválidos" });
        } else {
            const token = await contaService.loginConta(email, senha);
            if (token) {
                res.status(200).json(token);
            } else {
                res.status(404).json({ mensagem: "Conta não encontrada" });
            }
        }
    }
}