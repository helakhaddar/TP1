import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatusEnum } from '../src/todo-status-enum';

export class UpdateDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
