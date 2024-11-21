import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './authDto/register.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {

    constructor( private readonly authservice: AuthService) {}

    @Post('/register')
    async register(@Body() registerDto: RegisterDto, @Res() res: Response): Promise<Response> {
        try {
            const result = await this.authservice.register(registerDto);
            return res.status(201).json({
                message: result.message,
                user: result.user,
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }

    @Post('/login')
    async login (@Body() registerDto: RegisterDto, @Res() res: Response): Promise<Response> {
        try {
            const result = await this.authservice.login(registerDto);
            return res.status(200).json({
                token: result.token,
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }

    @Get('/getUsers')
    async getUsers(@Res() res: Response) {
        const result = await this.authservice.getUsers();
        if (result.success) {
          res.status(200).json(result);
        } else {
          res.status(500).json(result);
        }
    }

}
