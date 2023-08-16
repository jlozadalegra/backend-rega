import { SistemaNombresReg } from 'src/sistema-nombres-reg';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('areas')
export class areas {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: 'varchar', length: 60, default: '', unique: true })
  areas: string;

  @OneToMany(
    () => SistemaNombresReg,
    (SistemaNombresReg) => SistemaNombresReg.idarea,
  )
  SistemaNombresReg: SistemaNombresReg[];

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
