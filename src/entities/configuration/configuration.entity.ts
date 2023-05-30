import { Column, Entity, Index } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';

@Entity({ name: 'configurations', schema: 'public' })
@Index('configurations-name-active-idx', ['name', 'isActive'])
export class ConfigurationEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 50 })
  @Index('configuration-name-idx', { unique: true })
  name: string;

  @Column({ type: 'text', name: 'value' })
  value: string;
}
