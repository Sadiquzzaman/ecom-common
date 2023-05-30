import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { ShipmentEntity } from './shipment.entity';

@Entity({ name: 'shipment_groups', schema: 'public' })
@Index('shipment_groups-active-idx', ['name', 'isActive'])
export class ShipmentGroupEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 50 })
  @Index('shipment_group-name-idx', { unique: true })
  name: string;

  @Column({ type: 'varchar', name: 'description', length: 255 })
  description: string;

  @OneToMany(
    () => ShipmentEntity,
    (shipmentEntity) => shipmentEntity.shipmentGroup,
  )
  @JoinColumn({ name: 'shipment_id' })
  shipments: ShipmentEntity[];
}
