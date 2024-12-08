import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service'; // Importe o PrismaService

@Injectable()
export class GetManyFileUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(userId: string) {
    const files = await this.prisma.file.findMany({
      where: { userId },
    });
    return files;
  }
}