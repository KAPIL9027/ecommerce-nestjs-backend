import { Test, TestingModule } from '@nestjs/testing';
import { PlpController } from './plp.controller';

describe('PlpController', () => {
  let controller: PlpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlpController],
    }).compile();

    controller = module.get<PlpController>(PlpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
