import { Column, Entity, Index } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';

@Entity({ name: 'static_page', schema: 'public' })
@Index('static_page-name-active-idx', ['name', 'isActive'])
export class StaticPageEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 2050 })
  @Index('static_page-name-idx', { unique: true })
  name: string;

  @Column({ type: 'text', name: 'value' })
  value: string;
}
