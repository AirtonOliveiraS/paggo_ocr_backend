import { File } from "src/modules/files/entities/File";
import { FileRepository } from "src/modules/files/repositories/FileRepository";
import { PrismaService } from "../prisma.service";

import { Injectable } from "@nestjs/common";


@Injectable()
export class PrismaFileRepository implements FileRepository {
  
    constructor(private prisma: PrismaService) { }

    async create(file: File): Promise<void> {
      await this.prisma.file.create({
        data: {
          id: file.id,
          text: file.text,
          createdAt: file.createdAt,
          userId: file.userId,
        },
      });
    }

    async findById(id: string): Promise<File | null> {
      const file = await this.prisma.file.findUnique({
        where: {
          id,
        },
      });
  
      if (!file) return null;
  
      return new File(file);
    }
    
    async findManyByUserId(userId: string): Promise<File[]> {
      const files = await this.prisma.file.findMany({
        where: {
          userId,
        },
      });
  
      return files.map((file) => new File(file));
    }
    
    

}

