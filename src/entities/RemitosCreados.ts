import "reflect-metadata"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Timestamp,  } from "typeorm"
import { Cliente } from "./Cliente"

@Entity("remitos_creados")
export class RemitosCreados {
    @PrimaryGeneratedColumn()
    id_item: number

    @Column({default: 0})
    nro_remito: number

    @ManyToOne(() => Cliente, (cliente) => cliente.id)
    cliente_id: number

    @Column({default: "sin descripcion"})
    descripcion: string

    @Column({default: 0})
    cantidad: number

    @Column({default: 0})
    precio: number

    @Column({default: 0})
    total_item: number

    @Column({
        type: "timestamp",
        default: new Date().toLocaleString()})
    created_at: string

}