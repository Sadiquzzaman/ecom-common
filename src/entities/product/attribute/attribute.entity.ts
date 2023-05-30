import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../../core/custom-base.entity';
import { ProductAttributeEntity } from '../product-attribute.entity';
import { AttributeGroupEntity } from './attribute-group.entity';

@Entity({ name: 'attributes', schema: 'public' })
export class AttributeEntity extends CustomBaseEntity {
  // @Column({ type: 'varchar', name: 'color', length: 30 })
  // color: string;

  @Column({ type: 'varchar', name: 'name', length: 50 })
  name: string;

  @Column({ type: 'varchar', name: 'description', length: 255 })
  description: string;

  // @Column({ type: 'int', name: 'position' })
  // position: number;

  @ManyToOne(
    () => AttributeGroupEntity,
    (attributeGroupEntity) => attributeGroupEntity,
  )
  @JoinColumn({ name: 'attribute_group_id' })
  attributeGroup: AttributeGroupEntity;

  @ManyToMany(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.attributes,
  )
  productAttributes: ProductAttributeEntity[];
}
