import { ContaRepository } from "./ContaRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
const chave = process.env.KEY as string;

export class ContaService {
    private database: ContaRepository;
    constructor(repository: ContaRepository) {
        this.database = repository;
    }

    criaConta = async (nome: string, email: string, senha: string) => {
        const contaExiste = await this.database.buscaConta(email);
        if (contaExiste) {
            return null;
        }

        const conta = {nome, email, senha};
        conta.senha = await bcrypt.hash(senha, 10);

        return await this.database.criaConta(conta.nome, conta.email, conta.senha);
    }

    loginConta = async (email: string, senha: string) => {
        const conta = await this.database.buscaConta(email);
        if (conta) {
            if (await bcrypt.compare(senha, conta.senha)) {
                const token = jwt.sign({ id: conta.id }, chave, { expiresIn: "7d" });
                return { token: token };
            } else {
                return { mensagem: "Senha inválida" };
            }
        } else {
            return { mensagem: "Conta não encontrada" };
        }
    }
}