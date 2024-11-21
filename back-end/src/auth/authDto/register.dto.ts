import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
export class RegisterDto {
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly name?: string;

    
    @IsString()
    @IsEmail({}, { message: "Pleas enter correct email"})
    readonly email: string;

    
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;
}

export interface ResponseMessage {
    success: boolean;
    message: string;
    data: any;
}
  