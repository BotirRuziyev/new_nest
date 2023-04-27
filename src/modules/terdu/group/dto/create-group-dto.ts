import { IsNotEmpty, IsString } from "class-validator";

export class CreateGroupDto {
    @IsNotEmpty({message: "Yo'nalishni to'g'ri kiriting"})
    @IsString()
    group_orientation: string;
}
