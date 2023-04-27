import { Controller, Get, Post, Body, HttpCode, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group-dto';
import { IBaseController } from 'src/base';
import { Group } from '@prisma/client';
import { UpdateGroupDto } from './dto';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController implements IBaseController<Group, CreateGroupDto, UpdateGroupDto>{
    constructor(private service: GroupService) { }

    @HttpCode(200)
    @Get()
    getAll(): Promise<Group[]> {
        return this.service.getAll()
    }

    @Post()
    create(@Body() dto: CreateGroupDto): Promise<Group> {
        return this.service.create(dto)
    }

    @Put(":id")
    updateId(@Param("id", ParseIntPipe) id: number, dto: UpdateGroupDto): Promise<Group> {
        return this.service.updateId(id, dto)
    }

    @Delete(":id")
    deleteId(@Param("id", ParseIntPipe) id: number): Promise<Group> {
        return this.service.deleteId(id)
    }

    @Get(":id")
    getById(@Param("id", ParseIntPipe) id: number): Promise<Group> {
        return this.service.getById(id)
    }

}
