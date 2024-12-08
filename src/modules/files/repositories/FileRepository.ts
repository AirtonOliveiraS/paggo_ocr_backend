import { File } from "../entities/File";

export abstract class FileRepository{

     abstract create(file:File):Promise<void>;
          
     abstract findManyByUserId(userId: string): Promise<File[]>;
}