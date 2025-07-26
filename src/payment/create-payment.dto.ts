import { ApiProperty } from '@nestjs/swagger';
import { PaymentStatus } from '@prisma/client';
import { IsIn, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    example: 'order-id-1',
    description: 'Order ID, it relates to.',
  })
  @IsString()
  orderId: string;

  @ApiProperty({
    example: 'RAZORPAY',
    description: 'Payment Provider such as RAZORPAY, STRIPE.',
  })
  @IsString()
  provider: string;

  @ApiProperty({
    example: 'PAID',
    description: 'Status of the payment. (PAID/PENDING/CANCELLED)',
  })
  @IsIn(Object.values(PaymentStatus))
  status: PaymentStatus;

  @ApiProperty({
    example: 50000,
    description: 'Amount of the payment.',
  })
  @IsNumber()
  amount: number;
}
