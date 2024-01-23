import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name: "transactions" })
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: number

    @Column({type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Date
}
