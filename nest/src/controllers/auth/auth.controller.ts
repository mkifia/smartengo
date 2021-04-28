import {Body, Request, Controller, Post, UseGuards, NotFoundException, BadRequestException} from '@nestjs/common';
import {UserService} from "../../services/user/user.service";
import {UserEntity} from "../../entities/user/user.entity";
import * as bcrypt from 'bcrypt';
import {AuthService} from "../../services/auth/auth.service";
import {LocalStrategy} from "../../modules/auth/local.strategy";

@Controller()
export class AuthController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
        private readonly localStrategy: LocalStrategy
    ) {}

    @Post('register')
    async create(@Body() user: any): Promise<UserEntity> {
        return await this.userService.create(user);
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        return this.localStrategy.validate(email, password);
     }
}
