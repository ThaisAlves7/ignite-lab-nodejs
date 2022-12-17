import { PrismaService } from './prisma.service';
import { HttpModule } from './http.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
