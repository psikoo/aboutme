import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BasicPasswordMiddleware implements NestMiddleware {
  constructor(private readonly configService: ConfigService) {}
  use(req: Request, res: Response, next: NextFunction) {
    if(req.method !== "GET" && req.headers.apikey !== this.configService.get("API_KEY")) {
      console.log("[Error] Invalid apiKey");
      return res.status(401).json({ Error: "Invalid apikey" });
    }
    next();
  }
}
