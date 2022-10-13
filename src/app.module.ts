import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
