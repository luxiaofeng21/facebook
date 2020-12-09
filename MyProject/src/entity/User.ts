import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    me_img: string;
    
    @Column()
    bg_img: string;

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

    @Column({ comment: '创建时间' })
    date: Date;

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
    
    @Column("simple-array")
    user: object[];

    @Column("simple-array")
    friend: object[];

    @Column("simple-array")
    imgAll: object[];

    @Column("simple-array")
    music: object[];
    
    @Column("simple-array")
    movies: object[];

    @Column("simple-array")
    Tv: object[];

    @Column("simple-array")
    books: object[];

    @Column("simple-array")
    sports: object[];

    @Column("simple-array")
    video: object[];

    @Column("simple-array")
    lasts: object[];
    
    @Column()
    lang: string;
}
@Entity()
export class Recommended {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    me_img: string;

    
    @Column()
    user_name: string;

    @Column()
    title: string;
    
    @Column()
    name: string;
    
    @Column()
    date: Date;

    @Column()
    share: number;

    @Column()
    remark: number;

    @Column()
    goodsNum: number;

    @Column()
    showEmoji: boolean;

    @Column("simple-array")
    collection: object[];

    @Column()
    collect_title: string;

  
}

@Entity()
export class Groups {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;

    @Column()
    type: string;

    @Column()
    friends: string;
    
    @Column()
    date: number;
}