import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column({type: "datetime", default: () => `now()`})
    createdAt: Date;

    @Column({type: "datetime", default: () => `now()`})
    updatedAt: Date;
}
