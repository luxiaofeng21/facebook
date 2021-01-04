import "reflect-metadata";
import {createConnection} from "typeorm";
import {User,Recommended,Groups} from "./entity/User";
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    // const user = new User();
    // const recommended = new Recommended();
    // const groups = new Groups();
    // // user.firstName = "Timber";
    // // user.lastName = "Saw";
    // // user.age = 25;
    // // await connection.manager.save({user,recommended,groups});
    // await connection.manager.save(recommended);
    // await connection.manager.save(user);
    // await connection.manager.save(groups);
    // console.log("Saved a new user with id: " + user.id);
    // const users = await connection.manager.find(User);s

}).catch(error => console.log(error));
