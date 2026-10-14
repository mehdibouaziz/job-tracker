import {CreateJobDto} from "./create-job.dto.js";
import {PartialType} from "@nestjs/mapped-types";

export class UpdateJobDto extends PartialType(CreateJobDto) {}

// use this instead to forbid some fields
//
// export class UpdateJobDto extends PartialType(
//     OmitType(CreateJobDto, ['dateAdded'] as const)
// ) {}