import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class UpdateStudentDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
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
