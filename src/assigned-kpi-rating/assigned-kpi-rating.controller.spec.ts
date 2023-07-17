import { Test, TestingModule } from '@nestjs/testing';
import { AssignedKpiRatingController } from './assigned-kpi-rating.controller';
import { AssignedKpiRatingService } from './assigned-kpi-rating.service';

describe('AssignedKpiRatingController', () => {
  let controller: AssignedKpiRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignedKpiRatingController],
      providers: [AssignedKpiRatingService],
    }).compile();

    controller = module.get<AssignedKpiRatingController>(AssignedKpiRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
