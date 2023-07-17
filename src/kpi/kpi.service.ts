import { Injectable } from '@nestjs/common';
import { CreateKpiDto } from './dto/create-kpi.dto';
import { UpdateKpiDto } from './dto/update-kpi.dto';
import { KpiRepositoryService } from './kpi-repository.service';

@Injectable()
export class KpiService {

  constructor(private readonly kpiRepositoryService: KpiRepositoryService){}


  create(createKpiDto: CreateKpiDto) {
    return this.kpiRepositoryService.insert(createKpiDto);
    //return 'This action adds a new kpi';
  }

  findAll() {
    return `This action returns all kpi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kpi`;
  }

  update(id: number, updateKpiDto: UpdateKpiDto) {
    return `This action updates a #${id} kpi`;
  }

  remove(id: number) {
    return `This action removes a #${id} kpi`;
  }
}
