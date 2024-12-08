import { PrimaryGeneratedColumn, Column, OneToMany, Entity, JoinColumn } from "typeorm";
import { TarefaEntity } from "../Tarefa/TarefaEntity";

@Entity()

export class ContaEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nome: string;
    @Column()
    email: string;
    @Column()
    senha: string;
    @Column()
    dataCriacao: Date;
    @OneToMany(() => TarefaEntity, (tarefa) => tarefa.criador)
    @JoinColumn({ name: "tarefa_id" })
    tarefas!: TarefaEntity[];

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataCriacao = new Date();
    }
}