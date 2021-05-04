import { Module } from '@nestjs/common';
import { UserController } from '../../controllers/user/user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../../entities/user/user.entity";
import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";
import {CommonModule} from "../common/common.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    CommonModule,
  ],
    controllers: [UserController],
    exports: [TypeOrmModule],
    providers: [UserService, AuthService]
})
export class UserModule {}
