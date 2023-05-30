import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { CustomBaseEntity } from './custom-base.entity';
import { TicketEntity } from './ticket.entity';

@Entity({ name: 'ticket-departments', schema: 'public' })
@Index('departments-name-active-idx', ['name', 'isActive'])
export class TicketDepartmentEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 50 })
  @Index('departments-name-idx', { unique: true })
  name: string;

  @OneToMany(
    () => TicketEntity,
    (ticketEntity) => ticketEntity.ticketDepartment,
  )
  @JoinColumn({ name: 'department_id' })
  tickets: TicketEntity[];
}
