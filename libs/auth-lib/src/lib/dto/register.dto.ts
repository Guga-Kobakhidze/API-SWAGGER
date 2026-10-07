import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsObject,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  firstName!: string;

  @ApiProperty()
  @IsString()
  lastName!: string;

  @ApiProperty()
  @IsString()
  @Length(4, 128, {
    message: 'The "password" should be between 4 and 255 characters',
  })
  password!: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  role?: string;

  @ApiPropertyOptional({
    type: 'object',
    additionalProperties: true,
    example: {
      image: 'https://example.com/avatar.png',
      street: 'Main Street 1',
    },
  })
  @IsOptional()
  @IsObject()
  data?: Record<string, any>;
}
