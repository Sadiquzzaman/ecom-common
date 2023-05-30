import { BaseDto } from '../dto/core/base.dto';

export interface GeneralService<T extends BaseDto, U = Response, V = any> {
  findAll(res?: U): Promise<T[]>;

  findById(id: string, relation?: boolean, res?: U): Promise<T>;

  findByObject(dto: T, res?: U): Promise<T | T[]>;

  create(dto: T, res?: U): Promise<T>;

  update(id: string, dto: T, res?: U): Promise<T>;

  remove(id: string, res?: U): Promise<V>;
}
