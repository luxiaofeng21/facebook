import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
//用户
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

//帖子
@Entity()
export class Recommended {
    @PrimaryGeneratedColumn()
    id: number; //帖子id

    @Column()   //用户id
    uid: number;

    @Column()
    type: number;

    @Column()
    content: string;
    
    @Column()
    date: Date;

    @Column()
    share: number;

    @Column()
    remark: number;

    @Column()
    goodsNum: number;
}

//帖子评论集合
@Entity()
export class Comments {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    aid:number

    @Column()
    content: string;

    @Column()
    uid: Number;
    
    @Column()
    date: Date;
}

//公共主页
@Entity()
export class publicpage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column()
    type: string;

    @Column()
    img: string;
    
    @Column()
    date: Date;

    @Column("simple-array")
    friends: Array<number>
}

//小组
@Entity()
export class Groups {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    type: string;

    @Column()
    img: string;

    @Column()
    address: string;

    @Column()
    find: Boolean;

    @Column()
    date: Date;

    @Column("simple-array")
    friends: Array<number>
    // @Column() //定制
    // makes: object;
    
    // @Column() //更多
    // arrow: object;

    // @Column() //定制
    // status: object;

    // @Column() //讨论
    // discuss: object;
    
    // @Column() //高级设置
    // high: object;
}

//小组帖子集合
@Entity()
export class Grouprecommended {

    @PrimaryGeneratedColumn()
    id: number; //帖子id

    @Column()   //用户id
    uid: number;

    @Column()   //小组id
    aid: number;

    @Column()
    type: number;

    @Column()
    content: string;
    
    @Column()
    date: Date;

    @Column()
    share: number;

    @Column()
    remark: number;

    @Column()
    goodsNum: number;
}

//小组评论集合
@Entity()
export class Groupcomments {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    aid:number

    @Column()
    uid: Number;

    @Column()
    content: string;

    @Column()
    date: Date;
}