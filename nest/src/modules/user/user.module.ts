import { Module } from '@nestjs/common';
import { UserController } from '../../controllers/user/user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../../entities/user/user.entity";
import {UserService} from "../../services/user/user.service";

@Module({
  imports: [
      TypeOrmModule.forFeature([UserEntity])
  ],
    controllers: [UserController],
    exports: [TypeOrmModule, UserService],
    providers: [UserService]
})
export class UserModule {}
