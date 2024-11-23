import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './authDto/register.dto';
import { Request, Response } from 'express';

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

    @Post('/getUsers')
    async getUsers(@Req() req: Request, @Res() res: Response) {

        const Id = req.user; 
        const { saveUser } = req.body;
        
        if (!Id) {
          return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const result = await this.authservice.getUsers(Id, saveUser);
        if (result.success) {
          res.status(200).json(result);
        } else {
          res.status(500).json(result);
        }
    }

}
