import { Injectable } from '@nestjs/common';

import { ProductsRepository } from './product.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async findAll() {
    return this.productsRepository.find({});
  }
}
