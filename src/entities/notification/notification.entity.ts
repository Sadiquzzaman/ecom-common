import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { NotificationStatus } from '../../enum/notification.enum';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'notifications', schema: 'public' })
export class NotificationEntity extends CustomBaseEntity {
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

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.notifications)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
