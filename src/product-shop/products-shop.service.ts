import { Injectable } from '@nestjs/common';
import { ProductsShopRepository } from './product-shop.repository';

@Injectable()
export class ProductsShopService {
  constructor(
    private readonly productsShopRepository: ProductsShopRepository,
  ) {}

  async findAll() {
    return this.productsShopRepository.find({
      relations: ['address'],
      order: { id: 'ASC' },
    });
  }
  async findById(id: number) {
    return this.productsShopRepository.findOne({ id });
  }
}
