import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { NotificationStatus } from '../../enum/notification.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'sms_log', schema: 'public' })
export class SMSLogEntity extends CustomBaseEntity {
  @Column({
    type: 'enum',
    name: 'status',
    enum: NotificationStatus,
    default: `${NotificationStatus.unread}`,
    nullable: false,
  })
  status: NotificationStatus;

  @Column({ type: 'varchar', name: 'message', length: 500, nullable: true })
  message: string;

  @Column({ type: 'text', name: 'replay', nullable: true })
  replay: string;
}
