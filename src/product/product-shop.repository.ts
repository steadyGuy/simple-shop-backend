import { Injectable, Logger } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { AbstractRepository } from 'database/abstract.repository';
import { ProductsShop } from './models/products-shop.entity';

@Injectable()
export class ProductsShopRepository extends AbstractRepository<ProductsShop> {
  protected readonly logger = new Logger(ProductsShopRepository.name);

  constructor(
    @InjectRepository(ProductsShop)
    productsRepository: Repository<ProductsShop>,
    entityManager: EntityManager,
  ) {
    super(productsRepository, entityManager);
  }
}
