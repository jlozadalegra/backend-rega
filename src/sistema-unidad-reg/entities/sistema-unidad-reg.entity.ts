import { SistemaReg } from 'src/sistema-reg';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('sistema_unidadreg')
export class SistemaUnidadReg {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  Num_unidad_reg: string;

  @Column({ type: 'varchar', length: 100 })
  descripcionureg: string;

  @Column({ type: 'varchar', length: 50 })
  encab_rega: string;  

  @Column({ type: 'varchar', length: 100 })
  Ubic_docu: string;

  @OneToMany(() => SistemaReg, (sistemaReg) => sistemaReg.Num_unidad_reg)
  sistemareg: SistemaReg[]
}
