import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { ShipmentDto } from './shipment.dto';

export class ShipmentGroupDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Name must be defined!' })
  @IsString({ message: 'Name must be string!' })
  @MaxLength(50, { message: 'Maximum 50 character supported' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Must be a string' })
  @MaxLength(255, { message: 'Maximum 255 character supported' })
  description: string;

  @Type(() => ShipmentDto)
  shipments: ShipmentDto[];
}
