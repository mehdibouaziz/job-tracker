import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { JobsService } from './jobs.service.js';
import { CreateJobDto } from "./dto/create-job.dto.js";
import {Job} from "./job.schema.js";
import {UpdateJobDto} from "./dto/update-job.dto.js";

@Controller('jobs')
export class JobsController {
    constructor(private jobsService: JobsService) {}

    @Get()
    findAll(): Promise<Job[]> {
        return this.jobsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Job|null> {
        return this.jobsService.findOne(id);
    }

    @Post()
    create(@Body() createJobDto: CreateJobDto) {
        return this.jobsService.create(createJobDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
        return this.jobsService.update(id, updateJobDto);
    }
}
