import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorDto } from '../dto/reponse/error.dto';
import { FieldErrorDto } from '../dto/reponse/field-error.dto';
import { ResponseDto } from '../dto/reponse/response.dto';
import { SystemErrorDto } from '../dto/reponse/system-error.dto';

export class ProductAvaiablityException extends HttpException {
  constructor(error: any) {

    let response = { noice : new Date().getTime(), status : error.status, message: error.message, error: { fields : [{ field : 'quantity', message: error.response.limitExistItem}], system: null }, payload: null }

    super(response, error.status);
  }
}
