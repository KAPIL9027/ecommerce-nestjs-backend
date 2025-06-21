import { Test, TestingModule } from '@nestjs/testing';
import { PdpService } from './pdp.service';

describe('PdpService', () => {
  let service: PdpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdpService],
    }).compile();

    service = module.get<PdpService>(PdpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
