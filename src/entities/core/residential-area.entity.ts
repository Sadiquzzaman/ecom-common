import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from './custom-base.entity';
import { ThanaEntity } from './thana.entity';

@Entity({ name: 'residential_areas', schema: 'public' })
@Index('residential-areas-name-isactive-idx', ['name', 'isActive'])
@Index('residential-areas-alias-isactive-idx', ['alias', 'isActive'])
export class ResidentialAreaEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 64 })
  @Index('residential-areas-name-idx', { unique: false })
  name: string;

  @Column({ type: 'varchar', name: 'alias', length: 64 })
  @Index('residential-areas-alias-idx', { unique: false })
  alias: string;

  @ManyToOne(() => ThanaEntity, (thanaEntity) => thanaEntity.residentialAreas)
  @JoinColumn({ name: 'thana_id' })
  thana: ThanaEntity;
}
