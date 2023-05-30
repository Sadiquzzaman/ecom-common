import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { BaseDto } from '../core/base.dto';

export class ShopManagerAssignShopDto extends BaseDto {
  @ApiProperty({
    description: 'Shopmanager Id',
    required: true,
    default: '32fff7f0-6781-405d-8498-186aa473530a',
  })
  @IsNotEmpty()
  shopManager: string;

  @ApiProperty({
    description: 'Shop Ids',
    required: true,
    default: [
      '32fff7f0-6781-405d-8498-186aa473530a',
      '143e91a3-2356-483c-bb4f-8cc351e11c56',
    ],
  })
  @IsNotEmpty()
  @IsArray()
  shops: string[];
}
