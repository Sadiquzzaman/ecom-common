import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AffiliatorEntity } from '../user/affiliator.entity';
import { CustomerEntity } from '../user/customer.entity';
import { EmployeeEntity } from '../user/employee.entity';
import { CustomBaseEntity } from './custom-base.entity';
import { MerchantEntity } from '../user/merchant.entity';
import { SupplierEntity } from '../user/supplier.entity';
import { TransporterEntity } from '../user/transporter.entity';
import { AdminEntity } from '../user/admin.entity';

@Entity({ name: 'notes', schema: 'public' })
export class NoteEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'note', length: 255 })
  note: string;

  @ManyToOne(() => MerchantEntity, (merchantEntity) => merchantEntity.notes)
  @JoinColumn({ name: 'merchant_id' })
  merchant: MerchantEntity;

  @ManyToOne(() => AdminEntity, (adminEntity) => adminEntity.notes)
  @JoinColumn({ name: 'admin_id' })
  admin: AdminEntity;

  @ManyToOne(
    () => AffiliatorEntity,
    (affiliatorEntity) => affiliatorEntity.notes,
  )
  @JoinColumn({ name: 'affiliator_id' })
  affiliator: AffiliatorEntity;

  @ManyToOne(() => CustomerEntity, (customerEntity) => customerEntity.notes)
  @JoinColumn({ name: 'customer_id' })
  customer: CustomerEntity;

  @ManyToOne(() => EmployeeEntity, (employeeEntity) => employeeEntity.notes)
  @JoinColumn({ name: 'employee_id' })
  employee: EmployeeEntity;

  @ManyToOne(() => SupplierEntity, (supplierEntity) => supplierEntity.notes)
  @JoinColumn({ name: 'supplier_id' })
  supplier: SupplierEntity;

  @ManyToOne(
    () => TransporterEntity,
    (transporterEntity) => transporterEntity.notes,
  )
  @JoinColumn({ name: 'transporter_id' })
  transporter: TransporterEntity;
}
