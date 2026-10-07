import { IUser } from '../interfaces';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserModel implements IUser {
  @ApiProperty()
  public id!: number;

  @ApiProperty()
  public email!: string;

  @ApiProperty()
  public firstName!: string;

  @ApiProperty()
  public lastName!: string;

  @ApiProperty()
  public role!: string;

  @ApiPropertyOptional({
    type: 'object',
    additionalProperties: true,
  })
  public data?: Record<string, any>;

  @Exclude({ toPlainOnly: true })
  public password!: string;

  @Exclude({ toPlainOnly: true })
  public createdAt!: Date;

  @Exclude({ toPlainOnly: true })
  public updatedAt!: Date;
}
