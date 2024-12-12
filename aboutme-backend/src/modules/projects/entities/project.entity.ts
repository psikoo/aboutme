import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column({nullable:false})
    url: string;
    @Column({nullable:false})
    tag: string;
    @Column({nullable:false})
    sfw: boolean;
    @Column({nullable:false})
    name: string;
    @Column({nullable:false})
    description: string;
    @Column({nullable:false})
    date: Date;
}