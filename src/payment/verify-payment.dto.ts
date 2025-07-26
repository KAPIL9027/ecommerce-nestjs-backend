import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VerifyPaymentDto {
  @ApiProperty({
    example: 'razorpay-order-id',
    description: 'Razorpay order id.',
  })
  @IsString()
  razorpayOrderId: string;
  @ApiProperty({
    example: 'razorpay-payment-id',
    description: 'Razorpay payment id.',
  })
  @IsString()
  razorpayPaymentId: string;
  @ApiProperty({
    example: 'razorpay-signature-id',
    description: 'Razorpay Signature.',
  })
  @IsString()
  razorpaySignature: string;
}
