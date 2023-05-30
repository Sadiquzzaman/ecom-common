import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { NoteEntity } from '../core/note.entity';
import { RiskEntity } from '../core/risk.entity';

@Entity({ name: 'suppliers', schema: 'public' })
export class SupplierEntity extends CustomBaseEntity {
  @OneToMany(() => NoteEntity, (noteEntity) => noteEntity.supplier)
  @JoinColumn({ name: 'supplier_id' })
  notes: NoteEntity[];

  @OneToOne(() => RiskEntity)
  @JoinColumn({ name: 'risk_id' })
  risk: RiskEntity;
}
