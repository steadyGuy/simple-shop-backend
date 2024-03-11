import { Injectable, Logger } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

import { AbstractRepository } from 'database/abstract.repository';
import { Order } from './models/order.entity';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectRepository(Order)
    ordersRepository: Repository<Order>,
    entityManager: EntityManager,
  ) {
    super(ordersRepository, entityManager);
  }
}
