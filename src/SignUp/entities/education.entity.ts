import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qualificatioin: string;

  @Column()
  school: string;

  @Column()
  graduated: Date;
}
