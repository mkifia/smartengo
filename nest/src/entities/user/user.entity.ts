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

    @Column({type: "datetime", default: () => `now()`, name: "created_at"})
    createdAt: Date;

    @Column({type: "datetime", default: () => `now()`, name: "updated_at"})
    updatedAt: Date;
}
