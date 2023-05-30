import { StringToNumericTransformer } from './../../transformers/string-to-numeric.transformer';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ShipmentGroupEntity } from './shipment-group.entity';

@Entity({ name: 'shipments', schema: 'public' })
@Index(['shipmentGroup', 'value'], { unique: true })
export class ShipmentEntity extends CustomBaseEntity {
  @Column({ type: 'int', name: 'upper_value', default: () => "'0'" })
  value: number;

  // @Column({ type: 'int', name: 'lower-value', default: () => "'0'" })
  // lowerValue: number;

  @Column({
    type: 'decimal',
    name: 'price',
    precision: 20,
    scale: 6,
    default: () => "'0.000000'",
    transformer: new StringToNumericTransformer(),
  })
  price: number;

  @Column({ type: 'varchar', name: 'description', length: 255 })
  description: string;

  @ManyToOne(
    () => ShipmentGroupEntity,
    (shipmentGroupGroupEntity) => shipmentGroupGroupEntity,
  )
  @JoinColumn({ name: 'shipment_group_id' })
  shipmentGroup: ShipmentGroupEntity;
}
