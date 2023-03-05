import { SistemaReg } from 'src/sistema-reg';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('sistema_tipdocumcal')
export class SistemaTipDocCal {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  Co_docu: string;

  @Column({ type: 'varchar', length: 50 })
  Desc_docu: string;

  @OneToMany(() => SistemaReg, (sistemaReg) => sistemaReg.Co_tdoc)
  sistemareg: SistemaReg[];
}
