import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssignedKpiRating } from './entities/assigned-kpi-rating.entity';

@Injectable()
export class AssignedKpRatingRepositoryService extends Repository<AssignedKpiRating>{

    constructor(
        @InjectRepository(AssignedKpiRating)
        private assignedKpiRating : Repository<AssignedKpiRating>
    ) {
        super(assignedKpiRating.target,assignedKpiRating.manager,assignedKpiRating.queryRunner)
    }

}
