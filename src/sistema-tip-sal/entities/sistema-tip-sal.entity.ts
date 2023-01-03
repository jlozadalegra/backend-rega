import { SistemaReg } from 'src/sistema-reg';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('sistema_tipsal')
export class SistemaTipSal {
  @PrimaryColumn({ type: 'varchar', length: 6 })
  Co_tipsal: string;

  @Column({ type: 'varchar', length: 25 })
  Desc_tipsal: string;

  @OneToMany((type) => SistemaReg, (sistemaReg) => sistemaReg.Co_tipsal)
  sistemareg: SistemaReg[];
}
