import {  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ContaEntity } from '../Conta/ContaEntity';

@Entity()

export class TarefaEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    conteudo!: string;
    @Column()
    dataCriacao!: Date;
    @Column({ nullable: true })
    dataConclusao!: Date;
    @ManyToOne(() => ContaEntity, (conta) => conta.tarefas)
    @JoinColumn({ name: "criador" })
    criador!: ContaEntity;

    constructor(conteudo: string, criador: ContaEntity) {
        this.conteudo = conteudo;
        this.criador = criador;
        this.dataCriacao = new Date();
    }
}