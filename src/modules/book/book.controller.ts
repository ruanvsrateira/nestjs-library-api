import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('')
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Post('')
  async createBook(@Body() data: BookDTO) {
    return this.bookService.createNewBook(data);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number) {
    return this.bookService.deleteBookById(id);
  }

  @Put(':id')
  async updateBook(@Param('id') id: number, @Body() data: BookDTO) {
    return this.bookService.updateBookById(id, data);
  }
}
