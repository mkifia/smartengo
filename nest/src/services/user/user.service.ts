import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "../../entities/user/user.entity";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';
import {RegisterDto} from "../../Dto/register.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) {}

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findOne(id: string): Promise<UserEntity> {
        return await this.userRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async create(dto: RegisterDto): Promise<UserEntity> {
        if (dto.password !== dto.password_confirm) {
            throw new BadRequestException('passwords do not match');
        }
        dto.createdAt = dto.updatedAt = new Date();
        dto.password = await bcrypt.hash(dto.password, 12);
        return await this.userRepository.save(dto);
    }

    async retrieve(user) {
        return await this.userRepository.findOne(user);
    }
}
