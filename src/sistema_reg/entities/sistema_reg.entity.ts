import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ENT_SAL_ENUM } from './ent_sal.enum';

@Entity()
export class sistema_reg {
  @PrimaryGeneratedColumn()
  Co_reg: number;

  @Column()
  Co_nombre: string;

  @Column()
  Num_unidad_reg: string;

  @Column({
    type: "set",
    enum: ENT_SAL_ENUM,
    default: [ENT_SAL_ENUM.RE],
})
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