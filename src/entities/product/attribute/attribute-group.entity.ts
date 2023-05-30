import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { Bool } from '../../../enum/bool.enum';
import { CustomBaseEntity } from '../../core/custom-base.entity';
import { AttributeEntity } from './attribute.entity';

@Entity({ name: 'attribute_groups', schema: 'public' })
@Index('attribute_groups-active-idx', ['name', 'isActive'])
export class AttributeGroupEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 50 })
  @Index('attribute_group-name-idx', { unique: true })
  name: string;

  @Column({ type: 'varchar', name: 'description', length: 255 })
  description: string;

  @Column({ type: 'int', name: 'position' })
  position: number;

  @OneToMany(
    () => AttributeEntity,
    (attributeEntity) => attributeEntity.attributeGroup,
  )
  @JoinColumn({ name: 'attribute_id' })
  attributes: AttributeEntity[];
}
