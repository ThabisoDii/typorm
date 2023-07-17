import { Test, TestingModule } from '@nestjs/testing';
import { AssignedKpiRatingService } from './assigned-kpi-rating.service';

describe('AssignedKpiRatingService', () => {
  let service: AssignedKpiRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignedKpiRatingService],
    }).compile();

    service = module.get<AssignedKpiRatingService>(AssignedKpiRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
