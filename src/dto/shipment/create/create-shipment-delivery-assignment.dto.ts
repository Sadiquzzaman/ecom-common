import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateShipmetDeliveryAssignmetDto {
  @ApiProperty({
    description: "assigned delivery man's id",
    default: '751885da-0573-47e3-a400-c1836a27da00',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  deliveryManId: String;

  @ApiProperty({
    description: 'shop invoice id',
    default: '',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  shopInvoiceId: String;

  @ApiProperty({description: 'expected date of product shipment from shop', default:'2022-01-01', required: false})
  @IsString()
  @IsOptional()
  expectedShipmentDate: Date;

}
