import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupDto } from './group-dto/group-dto';

@Controller('group')
export class GroupController {
    constructor(private _prisma: PrismaService) { }

    @Get()
    async getAll() {
        return this._prisma.group.findMany({})
    }

    @Post()
    async create(@Body() data: GroupDto) {
        return this._prisma.group.create({ data: data })
    }

}
