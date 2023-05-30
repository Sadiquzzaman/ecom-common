import { ShopDto } from '../shop.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FollowShopDto extends ShopDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Shop ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid shop ID' })
  shopId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'User ID must be defined' })
  @IsUUID('all', { message: 'Must be a valid user ID' })
  userId: string;
}
