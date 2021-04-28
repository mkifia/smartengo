import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string, pwd: string): Promise<any> {
        const user = await this.userService.retrieve({email});
        if (!user) {
            throw new NotFoundException('User is not found');
        }
        if (!await bcrypt.compare(pwd, (await user).password)) {

            throw new BadRequestException('Invalid credentials');
        }

        const {password, ...result} = user;
        return result;
    }
}