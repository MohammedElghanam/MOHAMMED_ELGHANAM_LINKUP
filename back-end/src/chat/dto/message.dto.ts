import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  readonly user: string;

  @IsNotEmpty()
  @IsString()
  readonly text: string;
}
