import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth/auth.controller';
import {UserModule} from "../user/user.module";
import {AuthService} from "../../services/auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
