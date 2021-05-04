import {Body, Controller, Get} from '@nestjs/common';
import {UserService} from "../../services/user/user.service";
import {UserEntity} from "../../entities/user/user.entity";
import {AuthService} from "../../services/auth/auth.service";

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) {}

    @Get()
    async findAll(): Promise<UserEntity[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(id: string): Promise<UserEntity> {
        return await this.userService.findOne(id);
    }
}
