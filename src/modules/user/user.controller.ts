import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('')
  async createUser(@Body() data: UserDTO) {
    return this.userService.createNewUser(data);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() data: UserDTO) {
    return this.userService.updateUserById(Number(id), data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    console.log('ID', id);
    return this.userService.deleteUserById(Number(id));
  }
}
