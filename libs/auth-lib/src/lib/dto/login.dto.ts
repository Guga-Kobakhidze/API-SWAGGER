import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  @Length(4, 128, {
    message: 'The "password" should be between 4 and 255 characters',
  })
  password!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  role?: string;
}
