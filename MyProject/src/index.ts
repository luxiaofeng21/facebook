import "reflect-metadata";
import {createConnection} from "typeorm";
import {User,recommended} from "./entity/User";
createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    await connection.manager.save({user,recommended});
    // console.log("Saved a new user with id: " + user.id);
    // const users = await connection.manager.find(User);


}).catch(error => console.log(error));
