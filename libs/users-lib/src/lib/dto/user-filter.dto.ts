import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserFilterDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  role?: string;

  @ApiPropertyOptional({
    description: 'Search by first name, last name, or email',
  })
  @IsString()
  @IsOptional()
  search?: string;
}

export class UserEmailDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  @IsEmail()
  email!: string;
}
