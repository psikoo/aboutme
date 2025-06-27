import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShortUrl {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({nullable:false})
  oldUrl: string;
  @Column({nullable:false})
  newUrl: string;
}