import { Column, Entity, Index } from 'typeorm';
import { CustomBaseEntity } from './custom-base.entity';
import { Bool } from '../../enum/bool.enum';

@Entity({ name: 'contacts', schema: 'public' })
@Index('contacts-email-isactive-idx', ['email', 'isActive'])
@Index('contacts-phone-isactive-idx', ['phone', 'isActive'])
export class ContactUsEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'email', length: 100 })
  @Index('contacts-email-idx', { unique: false })
  email: string;

  @Column({ type: 'varchar', name: 'subject', length: 100 })
  subject: string;

  @Column({ type: 'text', name: 'message' })
  message: string;

  @Column({ type: 'varchar', name: 'phone', length: 30, nullable: true })
  @Index('contacts-phone-idx', { unique: false })
  phone: string;
}
