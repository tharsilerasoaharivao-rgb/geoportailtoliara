import { Test, TestingModule } from '@nestjs/testing';
import { ParcelsController } from './parcels.controller.js';
import { ParcelsService } from './parcels.service.js';

describe('ParcelsController', () => {
  let controller: ParcelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcelsController],
      providers: [ParcelsService],
    }).compile();

    controller = module.get<ParcelsController>(ParcelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
