import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { FileRepository } from '../../repositories/FileRepository';

interface GetManyFileRequest {
  
  userId: string;
}

export class GetManyFileUseCase {
  constructor(private fileRepository: FileRepository) {}

  async execute({  userId }: GetManyFileRequest) {
    const files = await this.fileRepository.findManyByUserId(
      userId,
    
    );

   

    if (!files) throw new NotFoundException();


    return files;
  }
}