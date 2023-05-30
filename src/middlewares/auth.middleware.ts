import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { RedisService } from 'nestjs-redis';
import { ErrorDto } from '../dto/reponse/error.dto';
import { ResponseDto } from '../dto/reponse/response.dto';
import { SystemErrorDto } from '../dto/reponse/system-error.dto';
import { Redis } from '../enum/redis.enum';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
  ) {}

  private static toResponse(res: Response, message: string): Response {
    const systemErrorDto = new SystemErrorDto('UNAUTHORIZED', 'Error', message);
    const errorDto = new ErrorDto(null, systemErrorDto);

    const responseDto = new ResponseDto(
      new Date().getTime(),
      HttpStatus.UNAUTHORIZED,
      message,
      errorDto,
      null,
    );

    return res.json(responseDto);
  }

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers['authorization']?.split('Bearer ')[1];

      if (!token) {
        return AuthMiddleware.toResponse(
          res,
          'Token is not found in request header',
        );
      }

      // set to default if fallback
      let expireTime = this.configService.get(Redis.TOKEN_EXPIRE_TIME);
      let tokenExpireTime = 3600;

      const privateKEY = this.configService
        .get('PRIVATE_KEY')
        .replace(/\\n/g, '\n');

      jwt.verify(
        token,
        privateKEY,
        {
          algorithms: ['RS256'],
        },
        (err, decoded) => {
          if (err) return AuthMiddleware.toResponse(res, 'Token is invalid!!');
          else {
            const token: any = decoded;
            expireTime = token.exp - token.iat;
          }
        },
      );

      await this.redisService
        .getClient(Redis.REDIS_SESSION)
        .expire(token, expireTime)
        .then((res) => {
          tokenExpireTime = res;
        });

      if (tokenExpireTime <= 0) {
        return AuthMiddleware.toResponse(res, 'Expired due to inactivity');
      }

      next();
    } catch (error) {
      return AuthMiddleware.toResponse(res, 'Authorization is denied');
    }
  }
}
