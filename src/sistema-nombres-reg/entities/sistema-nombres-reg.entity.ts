import { SistemaReg } from 'src/sistema-reg';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { aut_NC_ENUM } from './sistema-nombres-reg.enum';

@Entity('sistema_nombres_reg')
export class SistemaNombresReg {
  @PrimaryColumn({ type: 'varchar', length: 11, default: '0' })
  Co_usuario: string;

  @Column({ type: 'varchar', length: 4 })
  Num_unidad_reg: string;

  @Column({ type: 'varchar', length: 25 })
  identificador: string;

  @Column({ type: 'varchar', length: 25, default: '' })
  passnreg: string;

  @Column({ type: 'varchar', length: 150 })
  datosgenerales: string;

  @Column({
    type: 'set',
    enum: aut_NC_ENUM,
    default: [aut_NC_ENUM.NO],
  })
  aut_NC: aut_NC_ENUM; //enum SI y NO

  @OneToMany(() => SistemaReg, (sistemaReg) => sistemaReg.Co_nombre)
  sistemareg: SistemaReg[];
}
