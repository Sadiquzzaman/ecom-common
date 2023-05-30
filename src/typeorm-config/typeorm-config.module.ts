import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartDetailsEntity } from '../entities/cart/cart-details.entity';
import { CartEntity } from '../entities/cart/cart.entity';
import { CategoryEntity } from '../entities/category/category.entity';
import { ConfigurationEntity } from '../entities/configuration/configuration.entity';
import { AddressEntity } from '../entities/core/address.entity';
import { BankDetailsEntity } from '../entities/core/bank-details.entity';
import { BankEntity } from '../entities/core/bank.entity';
import { BrandEntity } from '../entities/core/brand.entity';
import { ContactUsEntity } from '../entities/core/contact-us.entity';
import { CountryEntity } from '../entities/core/country.entity';
import { CurrencyEntity } from '../entities/core/currency.entity';
import { CustomBaseEntity } from '../entities/core/custom-base.entity';
import { DistrictEntity } from '../entities/core/district.entity';
import { NoteEntity } from '../entities/core/note.entity';
import { ResidentialAreaEntity } from '../entities/core/residential-area.entity';
import { RiskEntity } from '../entities/core/risk.entity';
import { StateEntity } from '../entities/core/state.entity';
import { ThanaEntity } from '../entities/core/thana.entity';
import { TicketDepartmentEntity } from '../entities/core/ticket-department.entity';
// import { OrderLifeCycleEntity } from '../entities/order/order-life-cycle.entity';
import { TicketEntity } from '../entities/core/ticket.entity';
import { CouponUsageEntity } from '../entities/coupon/coupon-usage.entity';
import { CouponEntity } from '../entities/coupon/coupon.entity';
import { MerchantWithdrawalEntity } from '../entities/merchant-withdrawal/merchant-withdrawal.entity';
import { NotificationEntity } from '../entities/notification/notification.entity';
import { SMSLogEntity } from '../entities/notification/sms-log.entity';
import { OrderDetailsEntity } from '../entities/order/order-details.entity';
import { OrderEntity } from '../entities/order/order.entity';
import { InvoiceDetailsEntity } from '../entities/payment/invoice/invoice-details.entity';
import { InvoiceEntity } from '../entities/payment/invoice/invoice.entity';
import { MarchantInvoiceEntity } from '../entities/payment/invoice/marchant-invoice.entity';
import { MerchantInvoiceDetailsEntity } from '../entities/payment/invoice/merchant-invoice-details.entity';
import { PromotionInvoiceEntity } from '../entities/payment/invoice/promotion-invoice.entity';
import { ShopInvoiceDetailsEntity } from '../entities/payment/invoice/shop-invoice-details.entity';
import { ShopInvoiceEntity } from '../entities/payment/invoice/shop-invoice.entity';
import { OnlinePaymentActivityLogEntity } from '../entities/payment/ssl/online-payment-activity-log.entity';
import { SslPrepareEntity } from '../entities/payment/ssl/ssl-prepare.entity';
import { TransMasterEntity } from '../entities/payment/trans-master.entity';
import { AttributeGroupEntity } from '../entities/product/attribute/attribute-group.entity';
import { AttributeEntity } from '../entities/product/attribute/attribute.entity';
import { ProductAttributeEntity } from '../entities/product/product-attribute.entity';
import { ProductReviewEntity } from '../entities/product/product-review.entity';
import { ProductEntity } from '../entities/product/product.entity';
import { RefundReasonEntity } from '../entities/refund/config/refund-reason.entity';
import { CustomerRefundRequestDetailEntity } from '../entities/refund/customer-refund-request-details.entity';
import { CustomerRefundRequestEntity } from '../entities/refund/customer-refund-request.entity';
import { RefundApprovalDetailsEntity } from '../entities/refund/refund-approval/refund-approval-details.entity';
import { RefundApprovalEntity } from '../entities/refund/refund-approval/refund-approval.entity';
import { RefundShipmentAssignmentEntity } from '../entities/refund/refund-shipment-assignment/refund-shipment-assignment.entity';
import { ShipmentDeliveryAssignmentEntity } from '../entities/shipment/shipment-delivery-assignment.entity';
import { PromotionEntity } from '../entities/shop/promotion.entity';
import { PromotionsSlotEntity } from '../entities/shop/promotions-slot.entity';
import { ShopReviewEntity } from '../entities/shop/shop-review.entity';
import { ShopTypeEntity } from '../entities/shop/shop-type.entity';
import { ShopEntity } from '../entities/shop/shop.entity';
import { StaticPageEntity } from '../entities/static-page/static-page.entity';
import { StockItemTransactionEntity } from '../entities/stock/stock-item-transaction.entity';
import { StockPurchaseEntity } from '../entities/stock/stock-purchase.entity';
import { AdminEntity } from '../entities/user/admin.entity';
import { AffiliatorEntity } from '../entities/user/affiliator.entity';
import { CustomerEntity } from '../entities/user/customer.entity';
import { EmployeeEntity } from '../entities/user/employee.entity';
import { MerchantEntity } from '../entities/user/merchant.entity';
import { ProfileEntity } from '../entities/user/profile.entity';
import { RoleEntity } from '../entities/user/role.entity';
import { ShopManagerEntity } from '../entities/user/shop-manager.entity';
import { SupplierEntity } from '../entities/user/supplier.entity';
import { TransporterEntity } from '../entities/user/transporter.entity';
import { UserRoleEntity } from '../entities/user/user-role.entity';
import { UserEntity } from '../entities/user/user.entity';
import { ShipmentGroupEntity } from './../entities/shipment/shipment-group.entity';
import { ShipmentEntity } from './../entities/shipment/shipment.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_DB'),
        schema: configService.get('DATABASE_SCHEMA'),
        entities: [
          UserEntity,
          UserRoleEntity,
          RoleEntity,
          ProfileEntity,
          EmployeeEntity,
          CustomerEntity,
          AffiliatorEntity,
          MerchantEntity,
          SupplierEntity,
          StateEntity,
          DistrictEntity,
          ThanaEntity,
          ResidentialAreaEntity,
          RiskEntity,
          NoteEntity,
          CurrencyEntity,
          CountryEntity,
          AddressEntity,
          CustomBaseEntity,
          ContactUsEntity,
          CategoryEntity,
          ShopEntity,
          ProductEntity,
          ProductAttributeEntity,
          AttributeEntity,
          AttributeGroupEntity,
          TransMasterEntity,
          InvoiceEntity,
          InvoiceDetailsEntity,
          SslPrepareEntity,
          OnlinePaymentActivityLogEntity,
          CartEntity,
          CartDetailsEntity,
          OrderEntity,
          OrderDetailsEntity,
          ShopTypeEntity,
          TicketEntity,
          TicketDepartmentEntity,
          BrandEntity,
          ShopReviewEntity,
          PromotionEntity,
          ProductReviewEntity,
          NotificationEntity,
          TransporterEntity,
          ConfigurationEntity,
          CouponEntity,
          CouponUsageEntity,
          StockPurchaseEntity,
          StockItemTransactionEntity,
          MarchantInvoiceEntity,
          MerchantInvoiceDetailsEntity,
          ShopInvoiceEntity,
          ShopInvoiceDetailsEntity,
          ShipmentEntity,
          ShipmentGroupEntity,
          ShipmentDeliveryAssignmentEntity,
          // OrderLifeCycleEntity,
          StaticPageEntity,
          AdminEntity,
          RefundReasonEntity,
          CustomerRefundRequestEntity,
          CustomerRefundRequestDetailEntity,
          RefundShipmentAssignmentEntity,
          MerchantWithdrawalEntity,
          SMSLogEntity,
          RefundApprovalEntity,
          RefundApprovalDetailsEntity,
          ShopManagerEntity,
          BankEntity,
          BankDetailsEntity,
          PromotionsSlotEntity,
          PromotionInvoiceEntity,
        ],
        synchronize: true, //!!configService.get<boolean>('DATABASE_SYNCRONIZE'),
        logging: true, //!!configService.get<boolean>('DATABASE_LOGGING'),
        autoLoadEntities: true,
        logger: 'file',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeormConfigModule {}
