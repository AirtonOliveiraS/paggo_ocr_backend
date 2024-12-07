import { Body, Controller, Post } from "@nestjs/common";

import { CreateFileBody } from "./dtos/createfileBody";
import { FileViewModel } from "./viewModel/fileViewModel";
import { CreateFileUseCase } from "src/modules/files/useCases/createFileUseCase/createFileUseCase";

@Controller('file')
export class FileController {

    constructor(private createFileUseCase: CreateFileUseCase) { }

    @Post()
    async createFile(@Body() body: CreateFileBody) {

        const { text, userId } = body;
        const file = await this.createFileUseCase.execute({ 
            text, 
            userId, 
            
         });

        return FileViewModel.toHttp(file);
    }
    
}