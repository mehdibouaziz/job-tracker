import {join} from "path";

import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {ServeStaticModule} from "@nestjs/serve-static";
import {MongooseModule} from '@nestjs/mongoose';

import {AppController} from './app.controller.js';
import {AppService} from './app.service.js';
import {JobsModule} from './jobs/jobs.module.js';

console.log('MongoDB URI:', process.env.MONGODB_URI);

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGODB_URI ?? ''),
        ServeStaticModule.forRoot({
            rootPath: join(import.meta.dirname, '..', 'client'),
            exclude: ['/api/{*path}'],
        }),
        JobsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
