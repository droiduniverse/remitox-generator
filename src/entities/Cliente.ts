import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { RemitosCreados } from "./RemitosCreados"

@Entity("clientes")
export class Cliente {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({default: " "})
    cliente_nombre: string

    @Column({default: "123456"})
    telefono: string

    @Column({default: " "})
    domicilio: string

    @Column({default: "123456"})
    cuit: number


}