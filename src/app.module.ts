import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/user.module';
import { DataBaseModule } from './infra/database/prisma/database.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.guard';
import { FileModule } from './infra/http/modules/file/file.module';



@Module({
  imports: [DataBaseModule,UserModule,AuthModule,FileModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
