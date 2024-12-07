import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrismaUserRepository } from "./repositories/PrismaUserRepository";
import { FileRepository } from "src/modules/files/repositories/FileRepository";
import { PrismaFileRepository } from "./repositories/PrismaFileRepository";

@Module(
    {
        providers: [PrismaService,
            {
              provide: UserRepository,
              useClass:PrismaUserRepository,
            },
            {
              provide: FileRepository,
              useClass:PrismaFileRepository,
            }],
            exports:[UserRepository,FileRepository],
    }
)
export class DataBaseModule { }