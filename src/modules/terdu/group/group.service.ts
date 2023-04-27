import { Injectable } from '@nestjs/common';
import { Group } from '@prisma/client';
import { CreateGroupDto, UpdateGroupDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IBaseService } from 'src/base';

@Injectable()
export class GroupService implements IBaseService<Group, CreateGroupDto, UpdateGroupDto> {
    constructor(private _prisma: PrismaService){}

    async getAll(): Promise<Group[]>{
        return this._prisma.group.findMany({})
    }

    async create(data: CreateGroupDto): Promise<Group> {
        return this._prisma.group.create({ data: data});
    }

    async updateId(id: number, data: UpdateGroupDto): Promise<Group> {
        return this._prisma.group.update({ where: { id: id }, data: data});
    }

    async deleteId(id: number): Promise<Group> {
        return this._prisma.group.delete({ where: { id: id }});
    }

    async getById(id: number): Promise<Group> {
        return this._prisma.group.findUnique({ where: { id: id }});
    }

}
