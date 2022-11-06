import { SistemaNombresReg } from 'src/rega/entities';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { DEL_SIT } from '../enum';
import { ENT_SAL_ENUM } from '../enum';

@Entity("sistema_proc_dest")
export class SistemaProDest {
  @PrimaryColumn({type: 'varchar', length: 4, default: '0'})
  co_pdest: string;

  @Column({ type: 'varchar', length: 100 })
  descripcionpdest: string;
  
  @Column({
    type: 'set',
    enum: DEL_SIT,
    default: [DEL_SIT.NO],
  })
  del_sit: DEL_SIT;  
}
