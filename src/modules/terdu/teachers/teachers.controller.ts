import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeachersDto } from './teachers-dto/teachers-dto';

@Controller('teachers')
export class TeachersController {
    constructor(private _prisma: PrismaService) { }
    @Get()
    async getAll() {
        return this._prisma.teachers.findMany({})
    }

    @Post()
    async create(@Body() data: TeachersDto) {
        return this._prisma.teachers.create({ data: data })
    }

}
