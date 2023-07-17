import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kpi } from './entities/kpi.entity';

@Injectable()
export class KpiRepositoryService extends Repository<Kpi>{

    constructor(
        @InjectRepository(Kpi)
        private kpiRepository : Repository<Kpi>
    ) {
        super(kpiRepository.target,kpiRepository.manager,kpiRepository.queryRunner)
    }

}
