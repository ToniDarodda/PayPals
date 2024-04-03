import { Entity, Column } from 'typeorm';
import { Common } from '../common';

@Entity()
export class User extends Common {
  @Column('varchar', { name: 'first_name' })
  firstName: string;

  @Column('varchar', { nullable: true, name: 'last_name' })
  lastName: string;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar', { nullable: true, name: 'phone_number' })
  phoneNumber: string;
}
