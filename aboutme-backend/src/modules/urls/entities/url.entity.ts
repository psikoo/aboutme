import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Url {
    @PrimaryColumn()
    url: string;
    @Column({nullable:false})
    tag: string;
    @Column({nullable:false})
    sfw: boolean;
    @Column({nullable:false})
    name: string;
}