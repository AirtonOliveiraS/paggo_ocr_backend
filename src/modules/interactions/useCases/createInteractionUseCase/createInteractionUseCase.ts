import { Injectable } from "@nestjs/common";
import { InteractionRepository } from "../../repositories/InteractionRepository";
import { Interaction } from "../../entities/Interaction";


interface CreateInteractionRequest {
    answer?: string;
    question: string;
    userId: string;
   

   
}

@Injectable()
export class CreateInteractionUseCase {
    constructor(private interactionRepository: InteractionRepository) { }

    async execute({ question,answer, userId}: CreateInteractionRequest) {
        const interaction = new Interaction({

            question, 
            answer,
            userId
            
        });

        await this.interactionRepository.create(interaction);

        return interaction;

    }
}