import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase";
import { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModel } from "./viewModel/userViewModel";
import { Public } from "../auth/decorators/isPublic";


@Controller('users')
export class UserController {

    constructor(private createUserUseCase: CreateUserUseCase) { }

    @Post()
    @Public()
    async createUser(@Body() body: CreateUserBody) {

        const { email, name, password } = body;
        const user = await this.createUserUseCase.execute({ 
            email, 
            name, 
            password,
         });

        return UserViewModel.toHttp(user);
    }
}