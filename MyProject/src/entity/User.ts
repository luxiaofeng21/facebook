import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    me_img: string;

    @Column()
    user_name: string;

    @Column()
    surname: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    date: string;

    @Column()
    year: number;

    @Column()
    month: number;

    @Column()
    day: number;

    @Column()
    sex: string;

    @Column()
    age: number;

}

export class recommended {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    me_img: string;

    @Column()
    user_name: string;

    @Column()
    title: string;
    
    @Column()
    date: string;

    @Column()
    share: number;

    @Column()
    remark: number;

    @Column()
    goodsNum: number;

    @Column()
    showEmoji: boolean;

    @Column()
    collection: string;

    @Column()
    collect_title: string;
}
