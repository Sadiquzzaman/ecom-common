import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { InvoiceDetailsBaseEntity } from '../../core/invoice-details-base.entity';
import { ProductAttributeEntity } from '../../product/product-attribute.entity';
import { ProductEntity } from '../../product/product.entity';
import { MarchantInvoiceEntity } from './marchant-invoice.entity';

@Entity({ name: 'merchant_invoice_details', schema: 'public' })
export class MerchantInvoiceDetailsEntity extends InvoiceDetailsBaseEntity {
  @ManyToOne(
    () => ProductEntity,
    (productEntity) => productEntity.merchantInvoiceDetails,
  )
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.merchantInvoiceDetails,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @ManyToOne(
    () => MarchantInvoiceEntity,
    (marchantInvoiceEntity) => marchantInvoiceEntity.marchantInvoiceDetails,
  )
  @JoinColumn({ name: 'merchant_invoice_id' })
  merchantInvoice: MarchantInvoiceEntity;
}
