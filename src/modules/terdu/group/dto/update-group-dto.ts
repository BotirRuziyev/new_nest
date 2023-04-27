import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class UpdateGroupDto {
    @IsNumber()
    id: number;
    @IsNotEmpty({message: "Yo'nalishni to'g'ri kiriting"})
    @IsString()
    group_orientation: string;
}
