import { EmployeeEntity } from './employee.entity';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';
import { UserEntity } from './user.entity';
import { ShopEntity } from '../shop/shop.entity';

@Entity({ name: 'shop_manager', schema: 'public' })
export class ShopManagerEntity extends CustomBaseEntity {
  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.admin)
  @JoinColumn({ name: 'shop_manager_id' })
  notes: NoteEntity[];

  @OneToMany(() => EmployeeEntity, (employeeEntity) => employeeEntity.admin)
  @JoinColumn({ name: 'employee_id' })
  employee: EmployeeEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;

  @OneToOne(() => UserEntity, (userEntity) => userEntity.admin)
  user: UserEntity;

  // @OneToMany(() => ShopEntity, (shopEntity) => shopEntity.shopManager)
  // @JoinColumn({ name: 'shop_manager_id' })
  // shops: ShopEntity[];

  @ManyToMany(() => ShopEntity, (shopEntity) => shopEntity.shopManagers)
  @JoinTable({
    name: 'shop_managers_has_shops',
    joinColumn: {
      name: 'shop_manager_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'shop_id',
      referencedColumnName: 'id',
    },
  })
  shops: ShopEntity[];
}
