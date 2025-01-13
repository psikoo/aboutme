import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
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
    @Column({nullable:false}) // TODO check if this is right maybe change to string
    date:string;
}