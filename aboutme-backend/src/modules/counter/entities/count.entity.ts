import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Count {
    @PrimaryColumn({ default:0 })
    id: number;
    @Column({nullable:false, default:0 })
    count: number;
}