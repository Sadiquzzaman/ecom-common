import { ShopDto } from '../shop.dto';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShopDto extends ShopDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'User ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid user ID' })
  merchantID: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Shop Type ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid type ID' })
  shopTypeID: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID('all', { message: 'Must be a valid Shop Manager ID ' })
  shopManagerId: string;
}
