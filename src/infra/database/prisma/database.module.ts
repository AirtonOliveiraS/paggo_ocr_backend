import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UserRepository } from "src/modules/user/repositories/UserRepository";
import { PrismaUserRepository } from "./repositories/PrismaUserRepository";
import { FileRepository } from "src/modules/files/repositories/FileRepository";
import { PrismaFileRepository } from "./repositories/PrismaFileRepository";
import { InteractionRepository } from "src/modules/interactions/repositories/InteractionRepository";
import { PrismaInteractionRepository } from "./repositories/PrismaInteractionRepository";

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
            },
            {
              provide: InteractionRepository,
              useClass:PrismaInteractionRepository,
            }
          ],
            exports:[UserRepository,FileRepository,InteractionRepository],
    }
)
export class DataBaseModule { }