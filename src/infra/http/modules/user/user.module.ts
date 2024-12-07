import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase";
import { DataBaseModule } from "../../../database/prisma/database.module";

@Module({
    imports:[DataBaseModule],
    controllers:[UserController],
    providers:[CreateUserUseCase],
})
export class UserModule{}