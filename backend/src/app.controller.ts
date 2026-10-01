import { Controller, Get, Res } from '@nestjs/common';
import { type Response } from 'express';
import {join} from "path";

@Controller()
export class AppController {
  @Get('{*path}')
  serveApp(@Res() res: Response) {
    res.sendFile(join(import.meta.dirname, '..', 'client', 'index.html'));
  }
}
