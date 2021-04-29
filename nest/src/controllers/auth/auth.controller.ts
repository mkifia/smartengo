import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {UserService} from "../../services/user/user.service";
import {UserEntity} from "../../entities/user/user.entity";
import {AuthService} from "../../services/auth/auth.service";
import {Request,Response} from "express";

@Controller()
export class AuthController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) {}

    @Post('register')
    async create(@Body() user): Promise<UserEntity> {
        return await this.userService.create(user);
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ) {
        const user = await this.authService.login({email, password});
        response.cookie('access_token', user.access_token, {httpOnly: true});

        return user;
    }

    @Get('user')
    async user(
        @Req() request: Request
    ) {
        const cookie = request.cookies['access_token'];
        return await this.authService.verify(cookie);
    }
}
