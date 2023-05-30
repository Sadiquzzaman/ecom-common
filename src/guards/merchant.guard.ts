import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';

import { UserResponseDto } from '../dto/reponse/user-response.dto';
import { SystemException } from '../exceptions/system.exception';

@Injectable()
export class MerchantGuard implements CanActivate {
  private readonly logger = new Logger(MerchantGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();
    const user = req['_user'] as UserResponseDto;
    const shopId = req.body['shopId'];
    const error = { isGuard: true };

    if (!user) {
      throw new SystemException(error);
    }

    if (user.isSuperAdmin) {
      return true;
    }

    if (user.isAdmin) {
      return true;
    }

    if (this.hasMerchantAccess(user, shopId)) {
      return true;
    }

    throw new SystemException(error);
  }

  private hasMerchantAccess(user: UserResponseDto, shopId: string): boolean {
    console.log({ user, shopId });

    if (!shopId) {
      return false;
    }

    const shops = this.getUserShops(user);
    return shops.includes(shopId);
  }

  private getUserShops(user: UserResponseDto): string[] {
    const shops = [];
    for (const userRole of user.roles) {
      shops.push(userRole.shopId);
    }
    return shops;
  }
}
