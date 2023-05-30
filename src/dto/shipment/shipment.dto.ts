import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty } from 'class-validator';
import { BaseDto } from '../core/base.dto';
import { ShipmentGroupDto } from './shipment-group.dto';
import { ShipmentValueDto } from './shipment-value.dto';

export class ShipmentDto extends BaseDto {
  @ApiProperty({
    isArray: true,
    required: false,
    default: [
      {
        upperValue: 1,
        lowerValue: 2,
        price: 35,
        description: 'asd as dasd asdasd asdia sdoias diashd jiahs d',
      },
    ],
    type: [ShipmentValueDto],
  })
  @IsNotEmpty()
  @IsArray()
  shipmentValue: ShipmentValueDto[];

  @Type(() => ShipmentGroupDto)
  shipmentGroup: ShipmentGroupDto;
}
