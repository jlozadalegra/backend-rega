import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  Co_reg: number;

  @Column()
  Co_nombre: string;

  @Column()
  Num_unidad_reg: string;

  @Column()
  ent_sal: string; //enum R/E y R/S

  @Column()
  Co_tdoc: string;

  @Column()
  num_reg: number;

  @Column()
  aclar_adic: string;

  @Column()
  fecha: Date;

  @Column()
  denomindoc: string;

  @Column()
  Co_pdest: string;

  @Column()
  Co_tipsal: string;

  @Column()
  numejemp: number
  
  @Column()
  year: string
  
  @Column()
  repartir: string
}