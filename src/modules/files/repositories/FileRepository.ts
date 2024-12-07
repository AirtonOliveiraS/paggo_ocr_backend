import { File } from "../entities/File";

export abstract class FileRepository{

     abstract create(file:File):Promise<void>;
     abstract findById(id: string): Promise<File | null>;     
     abstract findManyByUserId(userId: string): Promise<File[]>;
}