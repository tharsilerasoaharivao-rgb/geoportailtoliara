import { Test, TestingModule } from '@nestjs/testing';
import { FokontanyService } from './fokontany.service.js';

describe('FokontanyService', () => {
  let service: FokontanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FokontanyService],
    }).compile();

    service = module.get<FokontanyService>(FokontanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
