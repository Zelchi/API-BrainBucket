import { Repository } from "typeorm";
import { ContaEntity } from "./ContaEntity";

export class ContaRepository {
    private database: Repository<ContaEntity>;
    constructor(repository: Repository<ContaEntity>) {
        this.database = repository;
    }

    buscaConta = async (email: string): Promise<ContaEntity | null> => {
        return await this.database.findOne({ where: { email: email } });
    }

    criaConta = async (nome: string, email: string, senha: string) => {
        const conta = new ContaEntity(nome, email, senha);
        return await this.database.save(conta);
    }
}