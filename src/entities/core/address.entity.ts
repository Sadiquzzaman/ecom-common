import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { OrderEntity } from '../order/order.entity';
import { InvoiceEntity } from '../payment/invoice/invoice.entity';
import { CustomerEntity } from '../user/customer.entity';
import { CountryEntity } from './country.entity';
import { CustomBaseEntity } from './custom-base.entity';
import { DistrictEntity } from './district.entity';
import { StateEntity } from './state.entity';
import { ThanaEntity } from './thana.entity';

@Entity({ name: 'addresses', schema: 'public' })
@Index('addresses-alias-isactive-idx', ['alias', 'isActive'])
@Index('addresses-lastname-isactive-idx', ['lastname', 'isActive'])
export class AddressEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'alias', length: 50, nullable: true })
  alias: string;

  @Column({ type: 'varchar', name: 'lastname', length: 100, nullable: true })
  @Index('addresses-lastname-idx', { unique: false })
  lastname: string;

  @Column({ type: 'varchar', name: 'phone', length: 100, nullable: true })
  phone: string;

  @Column({ type: 'varchar', name: 'firstname', length: 100, nullable: true })
  firstname: string;

  @Column({ type: 'varchar', name: 'address', length: 255, nullable: true })
  address: string;

  @ManyToOne(() => CountryEntity, (countryEntity) => countryEntity.addresses)
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @ManyToOne(() => StateEntity, (stateEntity) => stateEntity.addresses)
  @JoinColumn({ name: 'state_id' })
  state: StateEntity;

  @ManyToOne(() => DistrictEntity, (districtEntity) => districtEntity.addresses)
  @JoinColumn({ name: 'district_id' })
  district: DistrictEntity;

  @ManyToOne(() => ThanaEntity, (thanaEntity) => thanaEntity.addresses)
  @JoinColumn({ name: 'thana_id' })
  thana: ThanaEntity;

  @ManyToOne(
    () => CustomerEntity,
    (customerEntity) => customerEntity.shippingAddresses,
  )
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @OneToMany(
    () => InvoiceEntity,
    (invoiceEntity) => invoiceEntity.billingAddress,
  )
  @JoinColumn({ name: 'billing_address_id' })
  billingInvoices: InvoiceEntity[];

  @OneToMany(
    () => InvoiceEntity,
    (invoiceEntity) => invoiceEntity.shippingAddress,
  )
  @JoinColumn({ name: 'shipping_address_id' })
  shippingInvoices: InvoiceEntity[];

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.billingAddress)
  @JoinColumn({ name: 'billing_address_id' })
  billingOrders: OrderEntity[];

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.shippingAddress)
  @JoinColumn({ name: 'shipping_address_id' })
  shippingOrders: OrderEntity[];
}
