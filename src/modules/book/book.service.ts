import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BookDTO } from './book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getAllBooks() {
    const books = await this.prisma.book.findMany();

    return books;
  }

  async createNewBook(data: BookDTO) {
    const userExist = await this.prisma.user.findFirst({
      where: { id: data.ownerId },
    });

    if (!userExist) throw new NotFoundException('User not found by this id');

    const bookCreated = await this.prisma.book.create({
      data: {
        title: data.name,
        ownerId: data.ownerId,
      },
    });

    return bookCreated;
  }

  async deleteBookById(id: number) {
    const bookExist = await this.prisma.book.findFirst({ where: { id } });

    if (!bookExist) throw new NotFoundException();

    const bookDeleted = await this.prisma.book.delete({
      where: { id },
    });

    return bookDeleted;
  }

  async updateBookById(id: number, data: BookDTO) {
    const bookExist = await this.prisma.book.findFirst({ where: { id } });

    if (!bookExist) throw new NotFoundException();

    const bookUpdated = await this.prisma.book.update({
      where: { id },
      data,
    });

    return bookUpdated;
  }
}
