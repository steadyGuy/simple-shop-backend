import { Injectable } from '@nestjs/common';

import { ProductsRepository } from './product.repository';
import { FindAllItemsQueryDto } from './dto/find-all-items-query.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async findAll(params: FindAllItemsQueryDto) {
    return this.productsRepository.find(params);
  }
}
