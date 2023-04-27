import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete, HttpCode } from '@nestjs/common';
import { CreaeteStudentDto } from './dto/creaete-student-dto';
import { IBaseController } from 'src/base';
import { Students } from '@prisma/client';
import { UpdateStudentDto } from './dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController implements IBaseController<Students, CreaeteStudentDto, UpdateStudentDto>  {
    constructor(private service: StudentsService) { }

    @HttpCode(200)
    @Get()
    getAll(): Promise<Students[]> {
        return this.service.getAll();
    }

    @HttpCode(200)
    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number): Promise<Students>{
     return this.service.getById(id);
    }

    @HttpCode(200)
    @Post()
    create(dto: CreaeteStudentDto): Promise<Students> {
        return this.service.create(dto);
    }

    @HttpCode(200)
    @Put(":id")
    updateId(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateStudentDto): Promise<Students>{
        return this.service.updateId(id, dto);
    }

    @HttpCode(200)
    @Delete(":id")
    deleteId(@Param('id', ParseIntPipe) id: number): Promise<Students> {
        return this.service.deleteId(id);
    }
    
}
