import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StatusEnum } from 'src/todo/entities/StatusEnum';
import { Time } from 'src/common/time';

@Entity('todo')
export class TodoEntity extends Time {
  @PrimaryGeneratedColumn('uuid')
  id: Number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.waiting })
  status: StatusEnum;

  @Column()
  userId: number;
}
