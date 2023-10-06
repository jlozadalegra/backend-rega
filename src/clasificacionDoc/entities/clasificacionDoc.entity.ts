import { RegistroDoc } from 'src/registrosDoc/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('clasificacionDoc')
export class ClasificacionDoc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 4, default: '', unique: true })
  key: string;

  @Column({ type: 'varchar', length: 60, default: '', unique: true })
  name: string;

  @OneToMany(() => RegistroDoc, (registroDoc) => registroDoc.idClasificacion)
  idRegistroDoc: RegistroDoc[];

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
