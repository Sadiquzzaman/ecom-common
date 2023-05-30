import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AttributeIdDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Attribute ID must be defined' })
  @IsUUID('all', { message: 'Attribute ID must be an UUID' })
  id: string;
}
