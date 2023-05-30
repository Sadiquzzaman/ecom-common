import { IsNotEmpty, IsUUID } from 'class-validator';
import { AttributeDto } from '../attribute.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAttributeDto extends AttributeDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Attribute Group ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid attribute group ID' })
  attributeGroupID: string;
}
