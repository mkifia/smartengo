import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth/auth.controller';
import {UserModule} from "../user/user.module";
import {AuthService} from "../../services/auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {jwtConstants} from "./constants";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, // Todo change it
      signOptions: { expiresIn: '1d' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
