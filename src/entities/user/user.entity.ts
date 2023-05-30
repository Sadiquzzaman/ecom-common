import { PointToStringTransformer } from './../../transformers/point-to-string.transformer';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Gender } from '../../enum/gender.enum';
import { CartEntity } from '../cart/cart.entity';
import { AddressEntity } from '../core/address.entity';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { OrderEntity } from '../order/order.entity';
import { InvoiceEntity } from '../payment/invoice/invoice.entity';
import { TransMasterEntity } from '../payment/trans-master.entity';
import { AffiliatorEntity } from './affiliator.entity';
import { CustomerEntity } from './customer.entity';
import { EmployeeEntity } from './employee.entity';
import { MerchantEntity } from './merchant.entity';
import { ProfileEntity } from './profile.entity';
import { UserRoleEntity } from './user-role.entity';
import { ProductEntity } from '../product/product.entity';
import { ShopEntity } from '../shop/shop.entity';
import { TicketEntity } from '../core/ticket.entity';
import { ShopReviewEntity } from '../shop/shop-review.entity';
import { ProductReviewEntity } from '../product/product-review.entity';
import { CouponUsageEntity } from '../coupon/coupon-usage.entity';
import { CouponEntity } from '../coupon/coupon.entity';
import { NotificationEntity } from '../notification/notification.entity';
import { TransporterEntity } from './transporter.entity';
import { MarchantInvoiceEntity } from '../payment/invoice/marchant-invoice.entity';
import { Point } from '../../dto/location/point';
import { AdminEntity } from './admin.entity';
import { ShopManagerEntity } from './shop-manager.entity';

@Entity({ name: 'users', schema: 'public' })
@Index('users-lastName-isactive-idx', ['lastName', 'isActive'])
@Index('users-email-isactive-idx', ['email', 'isActive'])
@Index('users-phone-isactive-idx', ['phone', 'isActive'])
export class UserEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'first_name', length: 65 })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 65 })
  @Index('users-last-name-idx', { unique: false })
  lastName: string;

  @Column({ type: 'varchar', name: 'email', length: 100, nullable: true })
  @Index('users-email-idx', { unique: true })
  email: string;

  @Column({ type: 'varchar', name: 'phone', length: 20, nullable: true })
  @Index('users-phone-idx', { unique: true })
  phone: string;

  @Column({ type: 'varchar', name: 'nid', length: 100, nullable: true })
  @Index('users-nid-idx', { unique: true })
  nid: string;

  @Column({ type: 'varchar', name: 'license', length: 150, nullable: true })
  @Index('users-licence-idx', { unique: true })
  license: string;

  @Column({ type: 'int', name: 'otp', nullable: true })
  otp: number;

  @Column({ type: 'varchar', name: 'password', length: 100, nullable: true })
  password: string;

  @Column({
    type: 'enum',
    name: 'gender',
    enum: Gender,
    default: `${Gender.Unknown}`,
  })
  gender: Gender;

  @Column({
    type: 'timestamp without time zone',
    name: 'date_of_birth',
    nullable: true,
  })
  dateOfBirth: Date | null;

  @Column({
    type: 'timestamp',
    name: 'last_passwd_gen',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastPasswdGen: Date;

  @Column({
    type: 'varchar',
    name: 'reset_password_token',
    length: 40,
    nullable: true,
  })
  resetPasswordToken: string;

  @Column({
    type: 'timestamp',
    name: 'reset_password_validity',
    nullable: true,
  })
  resetPasswordValidity: Date;

  @Column({ type: 'varchar', name: 'location', length: 150, nullable: true })
  @Index('users-location-idx', { unique: false })
  location: string;

  @Column({
    type: 'point',
    name: 'geo_location',
    nullable: false,
    transformer: new PointToStringTransformer(),
  })
  geoLocation: Point;

  @OneToOne(() => AddressEntity)
  @JoinColumn({ name: 'address_id' })
  address: AddressEntity;

  @OneToOne(() => ProfileEntity)
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;

  @OneToOne(() => CustomerEntity, (customerEntity) => customerEntity.user)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToOne(() => AdminEntity, (adminEntity) => adminEntity.user)
  @JoinColumn({ name: 'admin_id' })
  admin: AdminEntity;

  @OneToOne(
    () => ShopManagerEntity,
    (shopManagerEntity) => shopManagerEntity.user,
  )
  @JoinColumn({ name: 'shop_manager_id' })
  shopManager: ShopManagerEntity;

  @OneToOne(() => MerchantEntity, (merchantEntity) => merchantEntity.user)
  @JoinColumn({ name: 'merchant_id' })
  merchant: MerchantEntity;

  @OneToOne(
    () => TransporterEntity,
    (transporterEntity) => transporterEntity.user,
  )
  @JoinColumn({ name: 'transporter_id' })
  transporter: TransporterEntity;

  @OneToOne(() => EmployeeEntity, (employeeEntity) => employeeEntity.user)
  @JoinColumn({ name: 'employee_id' })
  employee: EmployeeEntity;

  @OneToOne(() => AffiliatorEntity, (affiliatorEntity) => affiliatorEntity.user)
  @JoinColumn({ name: 'affiliator_id' })
  affiliator: AffiliatorEntity;

  @OneToMany(() => UserRoleEntity, (userRoleEntity) => userRoleEntity.user)
  @JoinColumn({ name: 'user_id' })
  roles: UserRoleEntity[];

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.user)
  @JoinColumn({ name: 'user_id' })
  products: ProductEntity[];

  @OneToMany(() => CartEntity, (cartEntity) => cartEntity.user)
  @JoinColumn({ name: 'user_id' })
  carts: CartEntity[];

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.user)
  @JoinColumn({ name: 'user_id' })
  orders: OrderEntity[];

  @OneToMany(() => InvoiceEntity, (invoiceEntity) => invoiceEntity.user)
  @JoinColumn({ name: 'user_id' })
  invoices: InvoiceEntity[];

  @OneToMany(
    () => TransMasterEntity,
    (transMasterEntity) => transMasterEntity.user,
  )
  @JoinColumn({ name: 'user_id' })
  transMasters: TransMasterEntity[];

  @ManyToMany(() => ShopEntity, (shopEntity) => shopEntity.users)
  @JoinTable({
    name: 'user_shop_combinations',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'shop_id',
      referencedColumnName: 'id',
    },
  })
  followingShops: ShopEntity[];

  @ManyToMany(() => ProductEntity, (productEntity) => productEntity.users)
  @JoinTable({
    name: 'user_product_combinations',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  wishlist: ProductEntity[];

  @OneToMany(() => TicketEntity, (ticketEntity) => ticketEntity.user)
  @JoinColumn({ name: 'user_id' })
  tickets: TicketEntity[];

  @OneToMany(
    () => ShopReviewEntity,
    (shopReviewEntity) => shopReviewEntity.user,
  )
  @JoinColumn({ name: 'user_id' })
  reviews: ShopReviewEntity[];

  @OneToMany(
    () => ProductReviewEntity,
    (productReviewEntity) => productReviewEntity.user,
  )
  @JoinColumn({ name: 'user_id' })
  productReviews: ProductReviewEntity[];

  @OneToMany(
    () => CouponUsageEntity,
    (couponUsageEntity) => couponUsageEntity.user,
  )
  @JoinColumn({ name: 'user_id' })
  couponUsages: CouponUsageEntity[];

  @ManyToMany(() => CouponEntity, (couponEntity) => couponEntity.users)
  coupons: CouponEntity[];

  @OneToMany(
    () => NotificationEntity,
    (notificationEntity) => notificationEntity.user,
  )
  @JoinColumn({ name: 'user_id' })
  notifications: NotificationEntity[];
}
