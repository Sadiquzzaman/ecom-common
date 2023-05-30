import { ShipmentDeliveryAssignmentEntity } from '../shipment/shipment-delivery-assignment.entity';
import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'transporter', schema: 'public' })
export class TransporterEntity extends CustomBaseEntity {
  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.employee)
  @JoinColumn({ name: 'transporter_id' })
  notes: NoteEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;

  @OneToOne(() => UserEntity, (userEntity) => userEntity.transporter)
  user: UserEntity;

  @OneToMany(
    () => ShipmentDeliveryAssignmentEntity,
    (deliveryAssignment) => deliveryAssignment.transporter,
  )
  assignment: ShipmentDeliveryAssignmentEntity;
}
