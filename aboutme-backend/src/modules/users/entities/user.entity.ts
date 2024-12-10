import { Url } from "src/modules/urls/entities";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;
    @Column({nullable:false})
    name: string;
    @Column({nullable:false})
    age: number;
    @Column({nullable:false})
    birthday: string;
    @Column({nullable:false})
    gender: string;
    @Column({nullable:false})
    pronouns: string;
    @Column({nullable:false})
    orientation: string;
    @Column({nullable:false})
    quote: string;
    @Column({nullable:false})
    intro: string;
    @Column({nullable:false})
    mood: string
    @OneToOne(type => Url, (url) => url.user)
    mainLink: Url;
    // @OneToMany(type => Url, url.user)
    // links: Url[];
    // @OneToMany(type => Url, url.user)
    // songs: Url[];
    // @OneToMany(type => Url, url.user)
    // photos: Url[];

    // projects: Url[];

    // blog: Url[];
}