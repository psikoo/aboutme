import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Interest {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({nullable:false})
  name: string;
  @Column({nullable:false})
  tag: string;
  @Column({nullable:false})
  sfw: boolean;
  @Column({nullable:false})
  text: string;
}