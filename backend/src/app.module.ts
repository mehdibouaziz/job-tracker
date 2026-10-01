import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(import.meta.dirname, '..', 'client'),
      exclude: ['/api/{*path}'],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
