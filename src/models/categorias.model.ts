import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class categorias {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
