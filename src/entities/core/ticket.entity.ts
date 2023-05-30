import { TicketStatus } from './../../enum/ticket-status.enum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { CustomBaseEntity } from './custom-base.entity';
import { TicketDepartmentEntity } from './ticket-department.entity';

@Entity({ name: 'tickets', schema: 'public' })
export class TicketEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'subject', length: 100 })
  subject: string;

  @Column({ type: 'text', name: 'issue_details' })
  issueDetails: string;

  @Column({
    type: 'enum',
    name: 'status',
    enum: TicketStatus,
    default: `${TicketStatus.OnHold}`,
  })
  status: TicketStatus;

  @ManyToOne(
    () => TicketDepartmentEntity,
    (ticketDepartmentEntity) => ticketDepartmentEntity.tickets,
  )
  @JoinColumn({ name: 'department_id' })
  ticketDepartment: TicketDepartmentEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.tickets)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
