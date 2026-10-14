import {join} from "path";

import {Module} from '@nestjs/common';
import {ServeStaticModule} from "@nestjs/serve-static";
import {MongooseModule} from '@nestjs/mongoose';

import {AppController} from './app.controller.js';
import {AppService} from './app.service.js';
import {JobsModule} from './jobs/jobs.module.js';


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://mehdibouazpro_db_user:<db_password>@job-tracker.uf1bnst.mongodb.net/?appName=job-tracker'),
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
