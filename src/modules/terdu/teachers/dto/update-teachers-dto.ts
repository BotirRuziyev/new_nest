import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateTeachersDto {
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
    group_Id: number;
}
