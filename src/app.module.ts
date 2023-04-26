import { Module } from '@nestjs/common';
import { GroupModule } from './modules/terdu/group/group.module';
import { PrismaService } from './prisma/prisma.service';
import { TeachersModule } from './modules/terdu/teachers/teachers.module';
import { StudentsModule } from './modules/terdu/students/students.module';
@Module({
  imports: [GroupModule, TeachersModule, StudentsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
