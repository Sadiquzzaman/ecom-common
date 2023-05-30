import { Column, Entity } from 'typeorm';
import { CustomBaseEntity } from './custom-base.entity';

@Entity({ name: 'risks', schema: 'public' })
export class RiskEntity extends CustomBaseEntity {
  @Column({ type: 'int', name: 'percent' })
  percent: number;

  @Column({ type: 'varchar', name: 'name', length: 30 })
  name: string;

  @Column({ type: 'varchar', name: 'color', length: 30 })
  color: string;
}
