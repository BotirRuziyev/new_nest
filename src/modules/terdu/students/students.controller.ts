import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { StudentsDto } from './students-dto/students-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('students')
export class StudentsController {
    constructor(private _prisma: PrismaService) { }

    @Get()
    async getAll() {
        return this._prisma.students.findMany({})
    }

    @Post()
    async create(@Body() data: StudentsDto) {
        return this._prisma.students.create({ data: data })
    }

    @Put(":id")
    async updateId(@Param("id", ParseIntPipe) id: number, @Body() data: StudentsDto) {
        return this._prisma.students.update({ where: { id }, data })
    }

    @Delete(":id")
    async deleteId(@Param("id", ParseIntPipe) id: number) {
        return this._prisma.students.delete({ where: { id } })
    }
}
