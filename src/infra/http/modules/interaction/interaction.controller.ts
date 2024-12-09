import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards
} from '@nestjs/common';

import { InteractionViewModel } from "./viewModel/interactionViewModel";
import { CreateFileUseCase } from "src/modules/files/useCases/createFileUseCase/createFileUseCase";
import { AuthenticatedRequestModel } from '../auth/models/authenticatedRequestModel';
import { GetManyFileUseCase } from 'src/modules/files/useCases/getManyFileUseCase/getManyFileUseCase';
import { AuthGuard } from "@nestjs/passport";
import { CreateInteractionBody } from './dtos/createInteractionBody';
import { CreateInteractionUseCase } from 'src/modules/interactions/useCases/createInteractionUseCase/createInteractionUseCase';
import { GetManyInteractionUseCase } from 'src/modules/interactions/useCases/getManyInteractionUseCase/getManyInteractionUseCase';
@Controller('interaction')
export class InteractionController {

  constructor(
    private createInteractionUseCase: CreateInteractionUseCase,
    private getManyInteractionUseCase: GetManyInteractionUseCase,
  ) { }

  @Post()
  async createInteraction(@Body() body: CreateInteractionBody) {

    const { question,answer, userId } = body;
    const interaction = await this.createInteractionUseCase.execute({
      question,
      answer,      
      userId,

    });

    return InteractionViewModel.toHttp(interaction);
  }

  @Get('allinteractions')
  async getManyInteration(@Query('userId') userId: string) {
    const interactions = await this.getManyInteractionUseCase.execute(userId);
    return interactions.map(InteractionViewModel.toHttp);
  }

  

}