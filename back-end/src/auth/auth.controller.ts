import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from './Dto/user.dto';

@Controller('auth')
export class AuthController {

    constructor( private readonly authservice: AuthService ){}

    @Get()
    getTest () {
        return this.authservice.test();
    }

    @Post()
    register (@Body() body: userDto) {
        return this.authservice.foBar(body);
    }
}
