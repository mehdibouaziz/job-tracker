import {IsBoolean, IsDate, IsIn, IsString, IsUrl, Length, ValidateNested} from "class-validator";
import {Prop} from "@nestjs/mongoose";
import {Type} from "class-transformer";
import {SalaryDto} from "./salary.dto.js";

export class CreateJobDto {
    @IsString()
    position: string;

    @IsString()
    company: string;

    @IsDate()
    dateAdded: Date;

    @IsUrl()
    link: string;

    @IsString()
    @IsIn(['hybrid', 'remote', 'onSite', 'n/a'])
    remote: string;

    @Prop()
    @Length(2) // language code i.e. EN, PL, FR
    language: string;

    @IsString()
    @IsIn(['new', 'applied', 'expired', 'interviewing', 'rejected', 'closed'])
    status: string;

    @IsBoolean()
    applied: boolean;

    @ValidateNested()
    @Type(() => SalaryDto)
    salary: SalaryDto;

    @IsString()
    comment: string;
}