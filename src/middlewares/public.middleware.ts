import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { RedisService } from 'nestjs-redis';
import { Redis } from '../enum/redis.enum';

@Injectable()
export class PublicMiddleware implements NestMiddleware {
  private readonly logger = new Logger(PublicMiddleware.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers['authorization']?.split('Bearer ')[1];

      if (token) {
        const payload = await this.redisService
          .getClient(Redis.REDIS_SESSION)
          .get(token);
        if (payload) req['_user'] = JSON.parse(payload);
      }
      next();
    } catch (error) {
      this.logger.log(error);
    }
  }
}
