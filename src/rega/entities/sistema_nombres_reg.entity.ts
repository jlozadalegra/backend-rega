import { sistema_reg } from 'src/rega/entities/sistema_reg.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { aut_NC_ENUM } from '../enum/sistema_nombres_reg.enum';

@Entity("sistema_nombres_reg")
export class SistemaNombresReg {
  @PrimaryColumn({ type: 'varchar', length: 11, default: '0'})
  @OneToMany((type) => sistema_reg, (Sistema_reg) => Sistema_reg.Co_nombre)
  Co_usuario: sistema_reg[];

  @Column({ type: 'varchar', length: 4 })
  Num_unidad_reg: string;

  @Column({ type: 'varchar', length: 25 })
  identificador: string;

  @Column({ type: 'varchar', length: 25, default: ''})
  passnreg: string;

  @Column({ type: 'varchar', length: 150 })
  datosgenerales: string;

  @Column({
    type: 'set',
    enum: aut_NC_ENUM,
    default: [aut_NC_ENUM.NO],
  })
  aut_NC: aut_NC_ENUM; //enum SI y NO  
}