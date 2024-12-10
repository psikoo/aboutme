import { User } from "src/modules/users/entities";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Url {
  @PrimaryColumn()
  name: string;
  @PrimaryColumn()
  link: string;
  @OneToOne(type => User, user => user.mainLink, {cascade:true})
  @JoinColumn({name: "user_id"}) //TODO change to other table why am i using a db deberia solo usarla paraprojecto musica y tal con distintas tablas solo hay un usuario
  user: User;
}