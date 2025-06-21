import { Test, TestingModule } from '@nestjs/testing';
import { PlpService } from './plp.service';

describe('PlpService', () => {
  let service: PlpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlpService],
    }).compile();

    service = module.get<PlpService>(PlpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
