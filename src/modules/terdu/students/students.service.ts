import { Injectable } from '@nestjs/common';
import { Students } from '@prisma/client';
import { IBaseService } from 'src/base';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreaeteStudentDto, UpdateStudentDto } from './dto';

@Injectable()
export class StudentsService implements IBaseService<Students, CreaeteStudentDto, UpdateStudentDto> {
    constructor(private _prisma: PrismaService) {}

    async getAll(): Promise<Students[]> {
        return this._prisma.students.findMany()
    }

    async getById(id: number): Promise<Students> {
        return this._prisma.students.findUnique({
            where: { id },
        })
    }

    async create(data: CreaeteStudentDto): Promise<Students> {
        return this._prisma.students.create({
            data: data,
        })
    }

    async updateId(id: number, data: UpdateStudentDto): Promise<Students> {
        return this._prisma.students.update({
            where: { id },
            data: data,
        })
    }

    async deleteId(id: number): Promise<Students> {
        return this._prisma.students.delete({
            where: { id },
        })
    }
}
