import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/infra/http/modules/user/user.module';
import { DataBaseModule } from './modules/user/infra/database/prisma/database.module';


@Module({
  imports: [DataBaseModule,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
