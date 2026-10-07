import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '../interfaces';

@Entity({ name: 'users', schema: 'public' })
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', nullable: false })
  public email!: string;

  @Column({ type: 'varchar', nullable: false })
  public password!: string;

  @Column({ type: 'varchar', nullable: false })
  public firstName!: string;

  @Column({ type: 'varchar', nullable: false })
  public lastName!: string;

  @Column({ type: 'varchar', nullable: false })
  public role!: string;

  @Column({ type: 'jsonb', nullable: true, default: {} })
  public data?: Record<string, any>;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;
}
