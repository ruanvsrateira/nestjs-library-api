import { IsNumber, IsString } from 'class-validator';

export class BookDTO {
  id?: number;

  @IsString()
  name: string;

  @IsNumber()
  ownerId: number;
}
