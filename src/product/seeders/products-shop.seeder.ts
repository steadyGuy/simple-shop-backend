import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { ProductsShopRepository } from '../product-shop.repository';

@Injectable()
export class ProductsShopSeeder implements Seeder {
  constructor(private readonly productsRepository: ProductsShopRepository) {}

  async seed(): Promise<any> {}

  async drop(): Promise<any> {}
}
