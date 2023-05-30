import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { InvoiceDto } from '../invoice.dto';
import { InvoiceDetailsDto } from '../invoice-details.dto';
import { OrderDto } from '../../../order/order.dto';

export class CreateInvoiceDto {
  @ApiProperty({ type: InvoiceDto })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  invoice: InvoiceDto;

  @ApiProperty({ type: OrderDto })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  order: OrderDto;

  @ApiProperty({ type: InvoiceDetailsDto })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  invoiceDetail: InvoiceDetailsDto;
}
