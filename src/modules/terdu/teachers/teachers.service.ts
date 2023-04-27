import { Injectable } from '@nestjs/common';
import { Teachers } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeachersDto } from './dto/create-teachers-dto';
import { UpdateTeachersDto } from './dto/update-teachers-dto';
import { IBaseService } from 'src/base';

@Injectable()
export class TeachersService implements IBaseService<Teachers, CreateTeachersDto, UpdateTeachersDto> {
    constructor(private _prisma: PrismaService){}

    async getAll(): Promise<Teachers[]> {
        return this._prisma.teachers.findMany({select: {id: true, name: true, group_name: true, group_Id: true, Students: {select: {id: true, name: true, group_name: true, group_Id: true}}}});
    }

    async getById(id: number): Promise<Teachers> {
        return this._prisma.teachers.findUnique({ where: { id } });
    }

    async create(data: CreateTeachersDto): Promise<Teachers> {
        return this._prisma.teachers.create({ data: data });
    }

    async updateId(id: number, data: UpdateTeachersDto): Promise<Teachers> {
        return this._prisma.teachers.update({ where: { id }, data: data });
    }

    async deleteId(id: number): Promise<Teachers> {
        return this._prisma.teachers.delete({ where: { id } });
    }
}
