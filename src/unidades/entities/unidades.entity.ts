
import { RegistroDoc } from 'src/registrosDoc/entities';
import { Users } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('unidades')
export class Unidades {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 60, default: '', unique: true })
  name: string //unidades: string;

  @Column({ type: 'varchar', length: 4, default: '', unique: true })
  key: string;

  @OneToMany(() => Users, (users) => users.idunidad)
  users: Users[];

  @OneToMany(() => RegistroDoc, (registroDoc) => registroDoc.idUnidad)
  idRegistroDoc: RegistroDoc[];

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
