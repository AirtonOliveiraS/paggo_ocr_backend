import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { FileRepository } from '../../repositories/FileRepository';

interface GetFileRequest {
  fileId: string;
  userId: string;
}

export class GetFileUseCase {
  constructor(private fileRepository: FileRepository) {}

  async execute({ fileId, userId }: GetFileRequest) {
    const file = await this.fileRepository.findById(fileId);

    if (!file) throw new NotFoundException();

    if (file.userId !== userId) throw new UnauthorizedException();

    return file;
  }
}