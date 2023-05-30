import { EmployeeEntity } from './employee.entity';
import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'admins', schema: 'public' })
export class AdminEntity extends CustomBaseEntity {
  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.admin)
  @JoinColumn({ name: 'admin_id' })
  notes: NoteEntity[];

  @OneToMany(() => EmployeeEntity, (employeeEntity) => employeeEntity.admin)
  @JoinColumn({ name: 'employee_id' })
  employee: EmployeeEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;

  @OneToOne(() => UserEntity, (userEntity) => userEntity.admin)
  user: UserEntity;
}
