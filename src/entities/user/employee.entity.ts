import { EmployeeType } from '../../enum/employee-type.enum';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';
import { UserEntity } from './user.entity';
import { AdminEntity } from './admin.entity';
import { ShopEntity } from '../entities.config';

@Entity({ name: 'employees', schema: 'public' })
export class EmployeeEntity extends CustomBaseEntity {
  @Column({
    type: 'enum',
    name: 'employee_type',
    enum: EmployeeType,
    default: `${EmployeeType.adminEmployee}`,
  })
  employeeType: EmployeeType;

  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.employee)
  @JoinColumn({ name: 'employee_id' })
  notes: NoteEntity[];

  @ManyToOne(() => AdminEntity, (adminEntity) => adminEntity.employee)
  admin: AdminEntity;

  @OneToOne(() => UserEntity, (userEntity) => userEntity.employee)
  user: UserEntity;

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;

  // @ManyToMany(() => ShopEntity, (shopEntity) => shopEntity.shopManagers)
  // @JoinTable({
  //   name: 'shop_managers_has_shops',
  //   joinColumn: {
  //     name: 'employee_id',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'shop_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // shops: ShopEntity[];
}
