import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignedKpiRatingDto } from './create-assigned-kpi-rating.dto';

export class UpdateAssignedKpiRatingDto extends PartialType(CreateAssignedKpiRatingDto) {}
