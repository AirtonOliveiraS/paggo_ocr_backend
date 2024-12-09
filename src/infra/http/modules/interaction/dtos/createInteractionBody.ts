import {  IsNotEmpty, IsString,MinLength } from "class-validator";

export class CreateInteractionBody{
    
    
    @IsString()        
    question: string;

    @IsString()        
    answer: string;


    @IsString()    
    @IsNotEmpty()
    userId: string;

   
    
    
}