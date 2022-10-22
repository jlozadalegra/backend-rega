import {
  Column,  
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ENT_SAL_ENUM } from '../enum/ent_sal.enum';

@Entity()
export class sistema_reg {
  @PrimaryGeneratedColumn()
  Co_reg: number;

  @Column({ type: 'varchar', length: 11 })
  Co_nombre: string;

  @Column({ type: 'varchar', length: 4 })
  Num_unidad_reg: string;

  @Column({
    type: 'set',
    enum: ENT_SAL_ENUM,
    default: [ENT_SAL_ENUM.RS],
  })
  ent_sal: string; //enum R/E y R/S

  @Column({ type: 'varchar', length: 4 })
  Co_tdoc: string;

  @Column({ type: 'int', width: 20 })
  num_reg: number;

  @Column({ type: 'varchar', length: 50 })
  aclar_adic: string;

  @Column({type: 'date', default: "0000-00-00"})  
  fecha: Date;

  @Column({ type: 'varchar', length: 200 })
  denomindoc: string;

  @Column({ type: 'varchar', length: 4 })
  Co_pdest: string;

  @Column({ type: 'varchar', length: 5 })
  Co_tipsal: string;

  @Column({ type: 'int', width: 10 })
  numejemp: number;

  @Column({ type: 'varchar', length: 4 })
  year: string;

  @Column({ type: 'varchar', length: 4, default: "R" })
  repartir: string;
}
