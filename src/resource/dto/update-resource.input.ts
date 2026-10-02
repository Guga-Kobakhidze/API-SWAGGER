import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';

export class UpdateResourceInput {
  @ApiProperty({
    type: 'object',
    additionalProperties: true,
    example: {},
  })
  @IsObject()
  data!: Record<string, any>;
}
