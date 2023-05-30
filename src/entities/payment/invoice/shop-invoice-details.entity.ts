import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { InvoiceDetailsBaseEntity } from '../../core/invoice-details-base.entity';
import { ProductAttributeEntity } from '../../product/product-attribute.entity';
import { ProductEntity } from '../../product/product.entity';
import { CustomerRefundRequestDetailEntity } from '../../refund/customer-refund-request-details.entity';
import { ShopInvoiceEntity } from './shop-invoice.entity';

@Entity({ name: 'shop_invoice_details', schema: 'public' })
export class ShopInvoiceDetailsEntity extends InvoiceDetailsBaseEntity {
  @ManyToOne(
    () => ProductEntity,
    (productEntity) => productEntity.shopInvoiceDetails,
  )
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(
    () => ProductAttributeEntity,
    (productAttributeEntity) => productAttributeEntity.shopInvoiceDetails,
  )
  @JoinColumn({ name: 'product_attribute_id' })
  productAttribute: ProductAttributeEntity;

  @ManyToOne(
    () => ShopInvoiceEntity,
    (shopInvoiceEntity) => shopInvoiceEntity.shopInvoiceDetails,
  )
  @JoinColumn({ name: 'shop_invoice_id' })
  shopInvoice: ShopInvoiceEntity;

  @OneToOne(
    () => CustomerRefundRequestDetailEntity,
    (customerRefundRequestDetailEntity) =>
      customerRefundRequestDetailEntity.shopInvoiceDetail,
  )
  refundRequestDetail: CustomerRefundRequestDetailEntity;
}
