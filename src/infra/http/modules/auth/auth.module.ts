import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "src/modules/auth/strategies/local.strategy";
import { ValidateUserUseCase } from "src/modules/auth/useCases/ValidateUserUseCase";
import { UserModule } from "../user/user.module";
import { DataBaseModule } from "../../../database/prisma/database.module";
import { SignInDTOValidateMiddleware } from "./middleware/signInDTOValidate.middleware";
import { SignInUseCase } from "src/modules/auth/useCases/SignInUseCase";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "src/modules/auth/strategies/jwt.strategy";



@Module({
    controllers:[AuthController],
    imports :[DataBaseModule,UserModule,JwtModule.register({
        secret:process.env.JWT_SECRET,
        signOptions:{expiresIn:process.env.JWT_EXPIRE},
    })],
    providers:[LocalStrategy,JwtStrategy,ValidateUserUseCase,SignInUseCase],
})
export class AuthModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SignInDTOValidateMiddleware).forRoutes('/signIn');
      }
}