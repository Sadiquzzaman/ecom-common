import { BaseDto } from '../dto/core/base.dto';
import { ResponseDto } from '../dto/reponse/response.dto';

export interface GeneralController<S extends BaseDto, T = ResponseDto> {
  findAll(): Promise<T>;

  findById(id: string): Promise<T>;

  findOne(dto: S): Promise<T>;

  create(dto: S): Promise<T>;

  update(id: string, dto: S): Promise<T>;

  remove(id: string): Promise<T>;
}
