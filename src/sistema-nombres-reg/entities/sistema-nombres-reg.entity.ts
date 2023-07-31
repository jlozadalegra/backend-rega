import { SistemaReg } from 'src/sistema-reg';
import { SistemaUnidadReg } from 'src/sistema-unidad-reg';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { aut_NC_ENUM } from './sistema-nombres-reg.enum';

@Unique('user_uq', [
  'Num_unidad_reg',  
  'datosgenerales'
])

@Entity('sistema_nombres_reg')
export class SistemaNombresReg {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'varchar', length: 11, default: '0' })
  Co_usuario: string;

  @ManyToOne(
    () => SistemaUnidadReg,
    (sistemaUnidadReg) => sistemaUnidadReg.sistemareg,
  )
  @JoinColumn({ name: 'Num_unidad_reg' })
  Num_unidad_reg: SistemaUnidadReg;  

  @Column({ type: 'varchar', length: 25, default: '' })
  identificador: string; 

  @Column({ type: 'varchar', length: 150 })
  datosgenerales: string;

  @Column({
    type: 'set',
    enum: aut_NC_ENUM,
    default: aut_NC_ENUM.NO,
  })
  aut_NC: aut_NC_ENUM; //enum SI y NO

  @Column({
    type: 'set',
    enum: aut_NC_ENUM,
    default: aut_NC_ENUM.NO,
  })
  deleted: aut_NC_ENUM; //enum SI y NO

  @Column({ type: 'varchar', length: 60 })
  passnreg: string;

  @Column({ type: 'varchar', length: 300, default: '' })
  RefreshToken: string;

  @OneToMany(() => SistemaReg, (sistemaReg) => sistemaReg.Co_nombre)
  sistemareg: SistemaReg[];
}
