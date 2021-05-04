import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth/auth.controller';
import {UserModule} from "../user/user.module";
import {AuthService} from "../../services/auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {UserService} from "../../services/user/user.service";
import {CommonModule} from "../common/common.module";

@Module({
  imports: [
    PassportModule,
    UserModule,
    CommonModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserService]
})
export class AuthModule {}
