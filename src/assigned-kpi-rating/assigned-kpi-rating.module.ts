import { Module } from '@nestjs/common';
import { AssignedKpiRatingService } from './assigned-kpi-rating.service';
import { AssignedKpiRatingController } from './assigned-kpi-rating.controller';
import { AssignedKpRatingRepositoryService } from './assigned-kp-rating-repository.service';
import { AssignedKpiRating } from './entities/assigned-kpi-rating.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AssignedKpiRatingController],
  imports:[TypeOrmModule.forFeature([AssignedKpiRating])],
  providers: [AssignedKpiRatingService, AssignedKpRatingRepositoryService],
  exports : [AssignedKpiRatingService, AssignedKpRatingRepositoryService]
})
export class AssignedKpiRatingModule {}
