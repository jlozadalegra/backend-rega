import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('avatar')
class Avatar {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  filename: string;

  @Column({
    type: 'bytea',
  })
  data: Uint8Array;
}

export default Avatar;
