import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Common } from '../common';
import { User } from '../user/entity';

@Entity()
export class Tri extends Common {
  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'share_code', nullable: true })
  shareCode: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner: User;
}
