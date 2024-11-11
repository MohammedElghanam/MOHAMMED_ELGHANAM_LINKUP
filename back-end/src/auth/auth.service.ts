import { Injectable } from '@nestjs/common';
import { userDto } from './Dto/user.dto';

@Injectable()
export class AuthService {

    test () {
        return " hello mohammed";
    }

    foBar ( userDto: userDto) {
        return {
            "core": true,
            "data": userDto
        };
    }
}
