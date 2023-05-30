import { IsNotEmpty, IsUUID } from 'class-validator';
import { ShipmentDto } from '../shipment.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShipmentDto extends ShipmentDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Shipment Group ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid shipment group ID' })
  shipmentGroupID: string;
}
