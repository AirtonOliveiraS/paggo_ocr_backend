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

import { CreateFileBody } from "./dtos/createfileBody";
import { FileViewModel } from "./viewModel/fileViewModel";
import { CreateFileUseCase } from "src/modules/files/useCases/createFileUseCase/createFileUseCase";
import { AuthenticatedRequestModel } from '../auth/models/authenticatedRequestModel';
import { GetManyFileUseCase } from 'src/modules/files/useCases/getManyFileUseCase/getManyFileUseCase';
import { AuthGuard } from "@nestjs/passport";
@Controller('file')
export class FileController {

  constructor(
    private createFileUseCase: CreateFileUseCase,
    private getManyFileUseCase: GetManyFileUseCase,
  ) { }

  @Post()
  async createFile(@Body() body: CreateFileBody) {

    const { text, userId } = body;
    const file = await this.createFileUseCase.execute({
      text,
      userId,

    });

    return FileViewModel.toHttp(file);
  }

  @Get('allfiles')
  async getManyFile(@Query('userId') userId: string) {
    const arquivos = await this.getManyFileUseCase.execute(userId);
    return arquivos.map(FileViewModel.toHttp);
  }

}