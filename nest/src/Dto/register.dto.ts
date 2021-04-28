import {IsDateString, IsEmail, IsNotEmpty} from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    username : string;

    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    password : string;

    @IsNotEmpty()
    password_confirm: string

    role : string;

    @IsNotEmpty()
    @IsDateString()
    createdAt;

    @IsNotEmpty()
    @IsDateString()
    updatedAt;
}