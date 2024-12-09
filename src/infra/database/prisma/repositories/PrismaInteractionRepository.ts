import { Interaction } from "src/modules/interactions/entities/Interaction";

import { PrismaService } from "../prisma.service";

import { Injectable } from "@nestjs/common";
import { InteractionRepository } from "src/modules/interactions/repositories/InteractionRepository";


@Injectable()
export class PrismaInteractionRepository implements InteractionRepository {
  
    constructor(private prisma: PrismaService) { }

    async create(interaction: Interaction): Promise<void> {
      await this.prisma.interaction.create({
        data: {
          id: interaction.id,
          question: interaction.question,
          answer: interaction.answer,
          createdAt: interaction.createdAt,
          userId: interaction.userId,
         
        },
      });
    }

    
    
    async findManyByUserId(userId: string): Promise<Interaction[]> {
      const interactions = await this.prisma.interaction.findMany({
        where: {
          userId,
        },
      });
  
      return interactions.map((interaction) => new Interaction(interactions));
    }
    
    

}

