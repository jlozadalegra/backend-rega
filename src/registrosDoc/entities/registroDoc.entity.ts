import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

import { ClasificacionDoc } from 'src/clasificacionDoc/entities';
import { Unidades } from 'src/unidades/entities';
import { Users } from 'src/users/entities';
/*
@Unique('co_reg_nr', [
  'Num_unidad_reg',
  'num_reg',
  'ent_sal',
  'year',
  'Co_pdest',
  'repartir',
])
*/
@Entity('register')
export class RegistroDoc {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', width: 10, nullable: true })
  conteo: number;

  @Column({ type: 'varchar', length: 20, default: '', nullable: true })
  codigo: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  fecha: Date;

  @Column({ type: 'varchar', length: 4, nullable: true })
  year: string;

  @Column({ type: 'varchar', length: 200, default: '' })
  descripcion: string;

  @ManyToOne(() => Unidades, (unidades) => unidades.idRegistroDoc, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'idUnidad' })
  idUnidad: Unidades;

  @ManyToOne(() => Users, (usuario) => usuario.idRegistroDoc, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'idUsuario' })
  idUsuario: Users;

  @ManyToOne(
    () => ClasificacionDoc,
    (clasificacion) => clasificacion.idRegistroDoc,
    {
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'idClasificacion' })
  idClasificacion: ClasificacionDoc;

  @ManyToMany(() => Unidades)
  @JoinTable()
  destino: Unidades[];

  @Column({ type: 'varchar', length: 200, default: '', nullable: true })
  file: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
