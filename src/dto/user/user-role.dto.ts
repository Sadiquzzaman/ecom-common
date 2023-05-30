import { Type } from 'class-transformer';
import { BaseDto } from '../core/base.dto';
import { RoleDto } from './role.dto';
import { UserDto } from './user.dto';
import { ShopDto } from '../shop/shop.dto';

export class UserRoleDto extends BaseDto {
  @Type(() => UserDto)
  user: UserDto;

  @Type(() => RoleDto)
  role: RoleDto;

  @Type(() => ShopDto)
  shop: ShopDto;
}
