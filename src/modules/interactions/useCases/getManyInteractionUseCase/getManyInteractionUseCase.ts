import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service'; // Importe o PrismaService

@Injectable()
export class GetManyInteractionUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(userId: string) {
    const interactions = await this.prisma.interaction.findMany({
      where: { userId },
    });
    return interactions;
  }
}