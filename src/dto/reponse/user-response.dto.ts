import { CustomUserRoleDto } from '../user/custom-user-role.dto';

export class UserResponseDto {
  userId: string;
  userName: string;
  phone: string;
  roles: CustomUserRoleDto[];
  accessToken: string;
  isSuperAdmin: boolean;
  isAdmin: boolean;
  isShopManager: boolean;
  hasLicenseAndNID: boolean;
  isEmployee: boolean;
  isCustomer: boolean;
  isMerchant: boolean;
  isUser: boolean;
  isAffiliator: boolean;
  isTransporter: boolean;
  SuperAdminId: string;
  AdminId: string;
  ShopManagerId: string;
  EmployeeId: string;
  CustomerId: string;
  MerchantId: string;
  UserId: string;
  AffiliatorId: string;
  TransporterId: string;
}
