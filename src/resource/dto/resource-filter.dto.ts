import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ResourceFilterDto {
  @IsString()
  @ApiPropertyOptional()
  @IsOptional()
  type?: string;

  @IsString()
  @ApiPropertyOptional()
  @IsOptional()
  inStock?: string;

  @IsString()
  @ApiPropertyOptional()
  @IsOptional()
  role?: string;

  @IsString()
  @ApiPropertyOptional()
  @IsOptional()
  search?: string;
}
