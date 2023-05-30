import { Column, Entity } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';

@Entity({ name: 'profiles', schema: 'public' })
export class ProfileEntity extends CustomBaseEntity {
  @Column({
    type: 'varchar',
    name: 'cover_image_url',
    length: 255,
    nullable: true,
  })
  coverImageUrl: string;

  @Column({
    type: 'varchar',
    name: 'profile_image_url',
    length: 255,
    nullable: true,
  })
  profileImageUrl: string;

  @Column({ type: 'varchar', name: 'title', length: 100, nullable: true })
  title: string;

  @Column({ type: 'varchar', name: 'description', length: 255, nullable: true })
  description: string;

  @Column({ type: 'text', name: 'present_address', nullable: true })
  presentAddress: string;

  @Column({ type: 'text', name: 'permanent_address', nullable: true })
  permanentAddress: string;

  @Column({ type: 'text', name: 'company_address', nullable: true })
  companyAddress: string;
}
