import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [PrismaService, UserService],
  controllers: [UserController],
})
export class UserModule {}
