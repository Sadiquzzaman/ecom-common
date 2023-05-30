import { Point } from '../location/point';
import { TransporterDto } from './transporter.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import {
  Allow,
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Gender } from '../../enum/gender.enum';
import { BaseDto } from '../core/base.dto';
import { AffiliatorDto } from './affiliator.dto';
import { CustomerDto } from './customer.dto';
import { EmployeeDto } from './employee.dto';
import { ProfileDto } from './profile.dto';
import { UserRoleDto } from './user-role.dto';
import { MerchantDto } from './merchant.dto';
import { InvoiceDto } from '../payment/invoice/invoice.dto';
import { TransMasterDto } from '../payment/trans-master.dto';
import { OrderDto } from '../order/order.dto';
import { ProductDto } from '../product/product.dto';
import { ShopDto } from '../shop/shop.dto';
import { TicketDto } from '../core/ticket.dto';
import { ShopReviewDto } from '../shop/shop-review.dto';
import { ProductReviewDto } from '../product/product-review.dto';
import { CouponUsageDto } from '../coupon/coupon-usage.dto';
import { CouponDto } from '../coupon/coupon.dto';
import { NotificationDto } from '../notification/notification.dto';
import { AddressDto } from '../core/address.dto';
import { CartDto } from '../cart/cart.dto';
import { AdminDto } from './admin.dto';
import { ShopManagerDto } from './shop-manager.dto';

export class UserDto extends BaseDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(65, { message: 'Maximum 65 characters supported' })
  firstName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(65, { message: 'Maximum 65 characters supported' })
  lastName: string;

  @ApiProperty()
  @IsOptional()
  // @IsEmail()
  @MaxLength(100, { message: 'Maximum 100 characters supported' })
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(20, { message: 'Maximum 20 character supported' })
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(13, { message: 'Maximum 13 character supported' })
  nid: string;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(40, { message: 'Maximum 40 character supported' })
  license: string;

  @ApiProperty()
  @IsOptional()
  @IsInt({ message: 'Must be a number!' })
  otp: number;

  @ApiProperty()
  @Exclude({ toPlainOnly: true })
  @IsNotEmpty({ message: 'Must be non empty' })
  @IsString({ message: 'Must be a string' })
  @MaxLength(100, { message: 'Maximum 100 characters supported' })
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Gender, { message: 'Must be a valid gender [1-3]' })
  gender: Gender;

  @ApiProperty()
  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  dateOfBirth: Date | null;

  @ApiProperty()
  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  lastPasswdGen: Date;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string' })
  @MaxLength(40, { message: 'Maximum 40 character supported' })
  resetPasswordToken: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString({ strict: true }, { message: 'Must be a valid date' })
  resetPasswordValidity: Date;

  @ApiProperty()
  @IsOptional()
  @IsString({ message: 'Must be a string!' })
  @MaxLength(150, { message: 'Maximum 150 character supported' })
  location: string;

  @ApiProperty()
  @IsOptional()
  @Allow()
  @Type(() => Point)
  geoLocation: Point;

  @Type(() => AddressDto)
  address: AddressDto;

  @Type(() => ProfileDto)
  profile: ProfileDto;

  @Type(() => CustomerDto)
  customer: CustomerDto;

  @Type(() => AdminDto)
  admin: AdminDto;

  @Type(() => ShopManagerDto)
  shopManager: ShopManagerDto;

  @Type(() => MerchantDto)
  merchant: MerchantDto;

  @Type(() => TransporterDto)
  transporter: TransporterDto;

  @Type(() => EmployeeDto)
  employee: EmployeeDto;

  @Type(() => AffiliatorDto)
  affiliator: AffiliatorDto;

  @Type(() => UserRoleDto)
  roles: UserRoleDto[];

  @Type(() => ProductDto)
  products: ProductDto[];

  @Type(() => CartDto)
  carts: CartDto[];

  @Type(() => OrderDto)
  orders: OrderDto[];

  @Type(() => InvoiceDto)
  invoices: InvoiceDto[];

  @Type(() => TransMasterDto)
  transMasters: TransMasterDto[];

  @Type(() => ShopDto)
  followingShops: ShopDto[];

  @Type(() => ProductDto)
  wishlist: ProductDto[];

  @Type(() => TicketDto)
  tickets: TicketDto[];

  @Type(() => ShopReviewDto)
  reviews: ShopReviewDto[];

  @Type(() => ProductReviewDto)
  productReviews: ProductReviewDto[];

  @Type(() => CouponUsageDto)
  couponUsages: CouponUsageDto[];

  @Type(() => CouponDto)
  coupons: CouponDto[];

  @Type(() => NotificationDto)
  notifications: NotificationDto[];
}
