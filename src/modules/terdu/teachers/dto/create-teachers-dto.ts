import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTeachersDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    group_name: string;
    
    @IsNotEmpty()
    @IsNumber()
    group_Id: number;
}
