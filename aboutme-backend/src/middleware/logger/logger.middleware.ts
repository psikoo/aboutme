import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';

export function LoggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`[${req.ip} > ${req.headers['user-agent']}] ${req.method} "${req.originalUrl}" > ${JSON.stringify(req.body)}`);
  next();
}
