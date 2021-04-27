import {Controller, Get, Post} from '@nestjs/common';

@Controller('users')
export class UserController {
    @Post('register')
    register() {
        return 'this is the register route';
    }
}
