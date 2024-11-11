import { IsString, IsNotEmpty } from 'class-validator';

export class userDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
