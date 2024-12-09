
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  get user() {
    return this['user']; // Acessa o modelo `user` diretamente sem recursão
  }

  get file() {
    return this['file']; // Acessa o modelo `file` diretamente sem recursão
  }
  
  get interaction() {
    return this['interaction']; // Acessa o modelo `file` diretamente sem recursão
  }
}
