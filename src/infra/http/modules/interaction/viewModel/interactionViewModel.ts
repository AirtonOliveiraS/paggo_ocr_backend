import { Interaction } from 'src/modules/interactions/entities/Interaction';
export class InteractionViewModel {
  static toHttp({ createdAt, question,answer,id,userId, }: Interaction) {
    return {
      question,
      answer,
      interactionId:id,
      userId,      
      createdAt,
    };
  }
}