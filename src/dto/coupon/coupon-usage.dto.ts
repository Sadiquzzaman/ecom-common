import { BaseDto } from '../core/base.dto';
import { UserDto } from '../user/user.dto';
import { CouponDto } from './coupon.dto';
import { Type } from 'class-transformer';

export class CouponUsageDto extends BaseDto {
  @Type(() => UserDto)
  user: UserDto;

  @Type(() => CouponDto)
  coupon: CouponDto;
}
