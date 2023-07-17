import { Injectable } from '@nestjs/common';
import { KpiRepositoryService } from 'src/kpi/kpi-repository.service';
import { AssignedKpRatingRepositoryService } from './assigned-kp-rating-repository.service';
import { CreateAssignedKpiRatingDto } from './dto/create-assigned-kpi-rating.dto';
import { UpdateAssignedKpiRatingDto } from './dto/update-assigned-kpi-rating.dto';

@Injectable()
export class AssignedKpiRatingService {

  constructor(private readonly assignedKpRatingRepositoryService: AssignedKpRatingRepositoryService){}

  create(createAssignedKpiRatingDto: CreateAssignedKpiRatingDto) {
    return this.assignedKpRatingRepositoryService.insert(createAssignedKpiRatingDto);
  }

  findAll() {
    return `This action returns all assignedKpiRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assignedKpiRating`;
  }

  update(id: number, updateAssignedKpiRatingDto: UpdateAssignedKpiRatingDto) {
    return `This action updates a #${id} assignedKpiRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignedKpiRating`;
  }
}
