import { Module } from "@nestjs/common";
import {  InteractionController } from "./interaction.controller";
import { DataBaseModule } from "../../../database/prisma/database.module";
import { PrismaService } from "src/infra/database/prisma/prisma.service";
import { GetManyInteractionUseCase } from "src/modules/interactions/useCases/getManyInteractionUseCase/getManyInteractionUseCase";
import { CreateInteractionUseCase } from "src/modules/interactions/useCases/createInteractionUseCase/createInteractionUseCase";

@Module({
    imports:[DataBaseModule],
    controllers:[InteractionController],
    providers:[CreateInteractionUseCase,GetManyInteractionUseCase,PrismaService],
})
export class InteractionModule{}