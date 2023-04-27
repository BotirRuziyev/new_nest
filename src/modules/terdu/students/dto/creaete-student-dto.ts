import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreaeteStudentDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    group_name: string;
    @IsNotEmpty()
    @IsNumber()
    teacher_Id: number;
    @IsNotEmpty()
    @IsNumber()
    group_Id: number;
}
