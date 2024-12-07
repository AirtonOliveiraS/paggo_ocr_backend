import { Injectable } from "@nestjs/common";
import { FileRepository } from "../../repositories/FileRepository";
import { File } from "../../entities/File";


interface CreateFileRequest {
    text?: string;
    userId: string;
   
}

@Injectable()
export class CreateFileUseCase {
    constructor(private fileRepository: FileRepository) { }

    async execute({ text, userId}: CreateFileRequest) {
        const file = new File({

            text,
            userId,
            
        });

        await this.fileRepository.create(file);

        return file;

    }
}