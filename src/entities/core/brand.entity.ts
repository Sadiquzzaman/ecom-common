import { Column, Entity, Index, JoinColumn, OneToMany } from 'typeorm';
import { ProductEntity } from '../product/product.entity';
import { CustomBaseEntity } from './custom-base.entity';

@Entity({ name: 'brands', schema: 'public' })
@Index('brands-name-active-idx', ['name', 'isActive'])
export class BrandEntity extends CustomBaseEntity {
  @Column({ type: 'varchar', name: 'name', length: 50 })
  @Index('brand-name-idx', { unique: true })
  name: string;

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.brand)
  @JoinColumn({ name: 'brand_id' })
  products: ProductEntity[];
}
