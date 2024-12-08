import { Module } from "@nestjs/common";
import { FileController } from "./file.controller";
import { DataBaseModule } from "../../../database/prisma/database.module";
import { CreateFileUseCase } from "src/modules/files/useCases/createFileUseCase/createFileUseCase";
import { GetManyFileUseCase } from "src/modules/files/useCases/getManyFileUseCase/getManyFileUseCase";
import { PrismaService } from "src/infra/database/prisma/prisma.service";

@Module({
    imports:[DataBaseModule],
    controllers:[FileController],
    providers:[CreateFileUseCase,GetManyFileUseCase,PrismaService],
})
export class FileModule{}