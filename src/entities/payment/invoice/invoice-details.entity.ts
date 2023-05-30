import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ProductAttributeEntity } from '../../../entities/product/product-attribute.entity';
import { ProductEntity } from '../../../entities/product/product.entity';
import { InvoiceDetailsBaseEntity } from '../../core/invoice-details-base.entity';
import { InvoiceEntity } from './invoice.entity';

@Entity({ name: 'invoice_details', schema: 'public' })
export class InvoiceDetailsEntity extends InvoiceDetailsBaseEntity {
  @ManyToOne(
    () => ProductEntity,
    (productEntity) => productEntity.invoiceDetails,
  )
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.invoiceDetails,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @ManyToOne(
    () => InvoiceEntity,
    (invoiceEntity) => invoiceEntity.invoiceDetails,
  )
  @JoinColumn({ name: 'invoice_id' })
  invoice: InvoiceEntity;
}
