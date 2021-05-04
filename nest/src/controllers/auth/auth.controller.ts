import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Post,
    Req,
    Res,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {UserService} from "../../services/user/user.service";
import {UserEntity} from "../../entities/user/user.entity";
import {AuthService} from "../../services/auth/auth.service";
import {Request,Response} from "express";
import {AuthGuard} from "../../modules/auth/auth.guard";

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
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

    @UseGuards(AuthGuard)
    @Get('user')
    async user(
        @Req() request: Request
    ) {
        const cookie = request.cookies['access_token'];
        let res = await this.authService.verify(cookie);
        return this.userService.retrieve({email: res.email});
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(
        @Res({passthrough: true}) response: Response
    ) {
        response.clearCookie('access_token');
        return {
            message: "success"
        }
    }
}
