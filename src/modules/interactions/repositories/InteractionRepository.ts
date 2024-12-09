import { Interaction } from "../entities/Interaction";

export abstract class InteractionRepository{

     abstract create(interaction:Interaction):Promise<void>;
          
     abstract findManyByUserId(userId: string): Promise<Interaction[]>;
}