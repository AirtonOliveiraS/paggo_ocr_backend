import { Module } from "@nestjs/common";
import { FileController } from "./file.controller";
import { DataBaseModule } from "../../../database/prisma/database.module";
import { CreateFileUseCase } from "src/modules/files/useCases/createFileUseCase/createFileUseCase";

@Module({
    imports:[DataBaseModule],
    controllers:[FileController],
    providers:[CreateFileUseCase],
})
export class FileModule{}