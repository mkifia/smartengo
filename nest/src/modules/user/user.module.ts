import { Module } from '@nestjs/common';
import { UserController } from '../../controllers/user/user.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "../../entities/user/user.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UserController]
})
export class UserModule {}
