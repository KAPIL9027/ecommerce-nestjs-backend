import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePaymentDto } from './create-payment.dto';
import crypto from 'crypto';
import { VerifyPaymentDto } from './verify-payment.dto';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class PaymentService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(PaymentService.name);
  }

  async createPayment(createPaymentBody: CreatePaymentDto) {
    try {
      const createdPayment = await this.prismaService.payment.create({
        data: createPaymentBody,
      });
      this.logger.info('Successfully Created the Payment');
      return {
        message: 'Successfully created the Payment',
        createdPayment,
      };
    } catch (e) {
      this.logger.error(e, 'Create Payment Service Failed!');
      throw e;
    }
  }

  async verifyPayment(verifyPaymentBody: VerifyPaymentDto) {
    try {
      const body =
        verifyPaymentBody.razorpayOrderId +
        '|' +
        verifyPaymentBody.razorpayPaymentId;
      const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
        .update(body.toString())
        .digest('hex');

      const isValid = expectedSignature === verifyPaymentBody.razorpaySignature;
      if (!isValid)
        throw new NotAcceptableException(
          'Not Valid Signature/PayLoad Provided!',
        );
      return {
        message: 'Payment Details verified Successfully!',
      };
    } catch (e) {
      this.logger.error(e, 'Cannot Verify the payment!');
      throw e;
    }
  }
}
