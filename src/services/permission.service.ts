import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { UserResponseDto } from '../dto/reponse/user-response.dto';

@Injectable()
export class PermissionService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  returnRequest = (): UserResponseDto => {
    const user: UserResponseDto = this.request['_user'] as UserResponseDto;
    return user ? user : null;
  };

  superAdmin = (): { user: string; status: boolean } => {
    const user: UserResponseDto = this.request['_user'] as UserResponseDto;
    if (user) {
      if (user.isAdmin || user.isSuperAdmin) {
        return {
          user: user.userId,
          status: true,
        };
      }
    }
    return {
      user: null,
      status: false,
    };
  };

  admin = (): { user: string; status: boolean } => {
    const user: UserResponseDto = this.request['_user'] as UserResponseDto;
    if (user) {
      if (user.isAdmin) {
        return {
          user: user.userId,
          status: true,
        };
      }
    }
    return {
      user: null,
      status: false,
    };
  };

  customer = (): { user: string; status: boolean } => {
    const user: UserResponseDto = this.request['_user'] as UserResponseDto;
    if (user) {
      if (user.isCustomer) {
        return {
          user: user.userId,
          status: true,
        };
      }
    }
    return {
      user: null,
      status: false,
    };
  };

  affiliator = (): { user: string; status: boolean } => {
    const user: UserResponseDto = this.request['_user'] as UserResponseDto;
    if (user) {
      if (user.isAffiliator) {
        return {
          user: user.userId,
          status: true,
        };
      }
    }
    return {
      user: null,
      status: false,
    };
  };

  employee = (): { user: string; status: boolean } => {
    const user: UserResponseDto = this.request['_user'] as UserResponseDto;
    if (user) {
      if (user.isEmployee) {
        return {
          user: user.userId,
          status: true,
        };
      }
    }
    return {
      user: null,
      status: false,
    };
  };

  user = (): { user: string; status: boolean } => {
    const user: UserResponseDto = this.request['_user'] as UserResponseDto;
    if (user) {
      if (user.isUser) {
        return {
          user: user.userId,
          status: true,
        };
      }
    }
    return {
      user: null,
      status: false,
    };
  };

  shopManager = (): { user: string; status: boolean } => {
    const user: UserResponseDto = this.request['_user'] as UserResponseDto;
    if (user) {
      if (user.isShopManager) {
        return {
          user: user.userId,
          status: true,
        };
      }
    }
    return {
      user: null,
      status: false,
    };
  };
}
