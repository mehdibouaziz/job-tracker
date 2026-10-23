import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Job} from "./job.schema.js";
import {Model} from "mongoose";
import {CreateJobDto} from "./dto/create-job.dto.js";
import {UpdateJobDto} from "./dto/update-job.dto.js";

@Injectable()
export class JobsService {
    constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}

    async findAll(): Promise<Job[]> {
        return this.jobModel.find().exec();
    }

    async findOne(id: string): Promise<Job|null> {
        return this.jobModel.findById(id);
    }

    async create(createJobDto: CreateJobDto): Promise<Job> {
        const createdJob = new this.jobModel(createJobDto);
        return await createdJob.save();
    }

    async update(id: string, updateJobDto: UpdateJobDto): Promise<Job|null> {
        return this.jobModel.findByIdAndUpdate(id, updateJobDto);
    }

    async delete(id: string): Promise<null> {
        return this.jobModel.findByIdAndDelete(id);
    }
}
