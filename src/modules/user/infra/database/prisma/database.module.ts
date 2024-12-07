import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrimaUserRepository } from "./repositories/PrismaUserRepository";

@Module(
    {
        providers: [PrismaService,
            {
              provide: UserRepository,
              useClass:PrimaUserRepository,
            }],
            exports:[UserRepository],
    }
)
export class DataBaseModule { }