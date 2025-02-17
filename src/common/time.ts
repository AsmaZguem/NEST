import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class Time {
  @CreateDateColumn({ update: false })
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date | null;
}
