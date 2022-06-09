import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  credentials: string;

  @Column()
  emailAddress: string;

  @Column()
  phone: number;

  @Column()
  role: string;

  @Column()
  password: string;

  @Column()
  facility: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
