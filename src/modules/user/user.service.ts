import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserDTO } from './user.dto';
import { hashPassword } from '../../utils/hashPassword.util';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<UserDTO[]> {
    const users = await this.prisma.user.findMany({
      include: {
        books: true,
      },
    });
    return users;
  }

  async createNewUser(data: UserDTO): Promise<UserDTO> {
    data.password = hashPassword(data.password);

    const userCreated = await this.prisma.user.create({
      data,
    });

    return userCreated;
  }

  async deleteUserById(id: number): Promise<UserDTO> {
    const userExist = await this.prisma.user.findFirst({ where: { id } });

    if (!userExist) throw new NotFoundException();

    const userDeleted = await this.prisma.user.delete({
      where: { id },
    });

    return userDeleted;
  }

  async updateUserById(id: number, data: UserDTO) {
    const userExist = await this.prisma.user.findFirst({ where: { id } });

    if (!userExist) throw new NotFoundException();

    const userUpdated = await this.prisma.user.update({
      where: { id },
      data,
    });

    return userUpdated;
  }

  async findUserByEmail(email: string) {
    const userExist = this.prisma.user.findUnique({
      where: { email },
    });

    return userExist;
  }

  async findUserById(id: number) {
    const userExist = this.prisma.user.findUnique({
      where: { id },
    });

    return userExist;
  }
}
