import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { CustomBaseEntity } from '../core/custom-base.entity';
import { RoleEntity } from './role.entity';
import { UserEntity } from './user.entity';
import { ShopEntity } from '../shop/shop.entity';

@Entity({ name: 'users_roles', schema: 'public' })
export class UserRoleEntity extends CustomBaseEntity {
  @ManyToOne(() => UserEntity, (userEntity) => userEntity.roles)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => RoleEntity, (roleEntity) => roleEntity.users)
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @OneToOne(() => ShopEntity)
  @JoinColumn({ name: 'shop_id' })
  shop: ShopEntity;
}
