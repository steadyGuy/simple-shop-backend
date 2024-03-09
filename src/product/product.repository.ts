import { Injectable, Logger } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './models/product.entity';
import { AbstractRepository } from 'database/abstract.repository';

@Injectable()
export class ProductsRepository extends AbstractRepository<Product> {
  protected readonly logger = new Logger(ProductsRepository.name);

  constructor(
    @InjectRepository(Product)
    productsRepository: Repository<Product>,
    entityManager: EntityManager,
  ) {
    super(productsRepository, entityManager);
  }
}
