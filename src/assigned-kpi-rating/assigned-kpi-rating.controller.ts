import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssignedKpiRatingService } from './assigned-kpi-rating.service';
import { CreateAssignedKpiRatingDto } from './dto/create-assigned-kpi-rating.dto';
import { UpdateAssignedKpiRatingDto } from './dto/update-assigned-kpi-rating.dto';

@Controller('assigned-kpi-rating')
export class AssignedKpiRatingController {
  constructor(private readonly assignedKpiRatingService: AssignedKpiRatingService) {}

  @Post('add')
  create(@Body() createAssignedKpiRatingDto: CreateAssignedKpiRatingDto) {
    return this.assignedKpiRatingService.create(createAssignedKpiRatingDto);
  }

  @Get()
  findAll() {
    return this.assignedKpiRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignedKpiRatingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignedKpiRatingDto: UpdateAssignedKpiRatingDto) {
    return this.assignedKpiRatingService.update(+id, updateAssignedKpiRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignedKpiRatingService.remove(+id);
  }
}
