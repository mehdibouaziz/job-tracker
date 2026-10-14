import {IsNumber, IsString, IsIn, Min, IsOptional} from 'class-validator';

export class SalaryDto {
    @IsNumber({ maxDecimalPlaces: 2 })
    @Min(0)
    @IsOptional()
    amount: number;

    @IsString()
    @IsIn(['USD', 'EUR', 'PLN'])
    currency: string;
}