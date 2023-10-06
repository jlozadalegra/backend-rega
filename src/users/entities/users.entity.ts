import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DeletedENUM, RolesENUM } from '../enum/users.enum';
import { Areas } from 'src/areas';
import { Cargos } from 'src/cargos';
import { Especialidades } from 'src/especialidades';
import { RegistroDoc } from 'src/registrosDoc/entities/registroDoc.entity';
import { Unidades } from 'src/unidades/entities';
import Avatar from 'src/avatar/entities/avatar.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 25, default: '', unique: true })
  user: string;

  @Column({ length: 60, default: '' })
  fullname: string;

  @Column({ length: 60, default: '' })
  password: string;

  @Column({
    length: 11,
    default: '',
    comment: 'Número de documento de identidad',
  })
  dni: string;

  @Column({ default: '' })
  email: string;

  @Column({
    type: 'enum',
    enum: RolesENUM,
    default: RolesENUM.EJECUTOR,
  })
  roles: RolesENUM; //enum SI y NO

  @Column({
    type: 'enum',
    enum: DeletedENUM,
    default: DeletedENUM.NO,
  })
  deleted: DeletedENUM; //enum SI y NO

  @ManyToOne(() => Areas, (area) => area.users)
  @JoinColumn({ name: 'idarea' })
  idarea: Areas;

  @ManyToOne(() => Cargos, (cargo) => cargo.users)
  @JoinColumn({ name: 'idcargo' })
  idcargo: Cargos;

  @ManyToOne(() => Especialidades, (especialidad) => especialidad.users)
  @JoinColumn({ name: 'idespecialidad' })
  idespecialidad: Especialidades;

  @ManyToOne(() => Unidades, (unidad) => unidad.users)
  @JoinColumn({ name: 'idunidad' })
  idunidad: Unidades;

  @OneToMany(() => RegistroDoc, (registro) => registro.idUsuario)
  idRegistroDoc: RegistroDoc[];

  @JoinColumn({ name: 'avatarId' })
  @OneToOne(() => Avatar, {
    nullable: true,
  })
  public avatar?: Avatar;

  @Column({ nullable: true })
  public avatarId?: string;

  @Column({ default: '' })
  refreshToken: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedDate: Date;
}
