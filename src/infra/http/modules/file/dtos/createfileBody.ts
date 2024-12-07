import {  IsNotEmpty, IsString,MinLength } from "class-validator";

export class CreateFileBody{
    
    
    @IsString()        
    text: string;

    @IsString()    
    @IsNotEmpty()
    userId: string;
    
    
}