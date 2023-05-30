import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';

import { UserResponseDto } from '../dto/reponse/user-response.dto';
import { SystemException } from '../exceptions/system.exception';

@Injectable()
export class ShopManagerGuard implements CanActivate {
  private readonly logger = new Logger(ShopManagerGuard.name);

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
    if (user.isShopManager) {
      return true;
    }

    if (user.isMerchant) {
      return true;
    }

    if (user.isTransporter) {
      return true;
    }

    if (this.hasShopManagerAccess(user, shopId)) {
      return true;
    }

    throw new SystemException(error);
  }

  private hasShopManagerAccess(user: UserResponseDto, shopId: string): boolean {
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
