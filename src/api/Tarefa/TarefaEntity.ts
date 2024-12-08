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
    @Column()
    dataConclusao!: Date;
    @ManyToOne(() => ContaEntity, (conta) => conta.id)
    @JoinColumn({ name: "criador_id" })
    criador!: ContaEntity;
}