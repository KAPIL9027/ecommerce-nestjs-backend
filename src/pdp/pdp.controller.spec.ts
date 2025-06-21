import { Test, TestingModule } from '@nestjs/testing';
import { PdpController } from './pdp.controller';

describe('PdpController', () => {
  let controller: PdpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdpController],
    }).compile();

    controller = module.get<PdpController>(PdpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
