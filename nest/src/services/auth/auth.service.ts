import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import * as bcrypt from "bcrypt";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, pwd: string): Promise<any> {
        const user = await this.userService.retrieve({email});
        if (!user) {
            throw new NotFoundException('User is not found');
        }

        if (!pwd || !await bcrypt.compare(pwd, (await user).password)) {
            throw new BadRequestException('Invalid credentials');
        }

        const {password, ...result} = user;
        return result;
    }

    async login(user: any) {
        const res = await this.validateUser(user.email, user.password);
        const payload = { email: res.email, password: res.password};
        let access_token = this.jwtService.sign(payload);

        if (access_token) {
            res.access_token = access_token;
            return res;
        }
        throw new BadRequestException('Bad credentials');
    }

    async verify(cookie: string) {
        return this.jwtService.verifyAsync(cookie);
    }
}