import { Controller, Get, Post, Body, HttpCode, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeachersDto } from './dto/create-teachers-dto';
import { IBaseController } from 'src/base';
import { Teachers } from '@prisma/client';
import { UpdateTeachersDto } from './dto/update-teachers-dto';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController implements IBaseController<Teachers, CreateTeachersDto, UpdateTeachersDto> {
    constructor(private service: TeachersService) { }

    @HttpCode(200)
    @Get()
    getAll(): Promise<Teachers[]> {
        return this.service.getAll()
    }

    @HttpCode(201)
    @Post()
    create(dto: CreateTeachersDto): Promise<Teachers> {
        return this.service.create(dto)
    }

    @HttpCode(200)
    @Get(":id")
    getById(@Param("id", ParseIntPipe) id: number): Promise<Teachers> {
        return this.service.getById(id)
    }

    @HttpCode(200)
    @Put(":id")
    updateId(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateTeachersDto): Promise<Teachers> {
        return this.service.updateId(id,dto)
    }

    @HttpCode(200)
    @Delete(":id")
    deleteId(@Param("id", ParseIntPipe) id: number,): Promise<Teachers> {
        return this.service.deleteId(id)
    }

}
