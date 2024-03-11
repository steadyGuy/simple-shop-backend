import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './order.repository';
import { UsersRepository } from 'src/user/user.repository';
import { User } from 'src/user/models/user.entity';
import { ProductsRepository } from 'src/product/product.repository';
import { DataSource, In } from 'typeorm';
import { Order } from './models/order.entity';
import { Product } from 'src/product/models/product.entity';
import { OrderItem } from './models/order-item.entity';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    private readonly productsRepository: ProductsRepository,
    private readonly usersRepository: UsersRepository,
    private readonly dataSource: DataSource,
  ) {}

  async createOrder(params: CreateOrderDto) {
    let user;
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      // email + phone => unique
      user = await this.usersRepository.findOne({
        email: params.email,
        phone: params.phone,
      });
    } catch (error) {
      if (error.name === 'NotFoundException') {
        user = await this.usersRepository.create(new User(params));
      }
    } finally {
      const products = await this.productsRepository.find({
        where: { id: In(params.products) },
      });

      await queryRunner.connect();
      await queryRunner.startTransaction();

      // check if products are in stock and update quantity
      await Promise.all(
        products.map(async (product) => {
          const orderProductParam = params.products.find(
            (itm) => itm.id === product.id,
          );

          if (product.quantity - orderProductParam.quantity < 0) {
            await queryRunner.rollbackTransaction();
            throw new BadRequestException(
              `Product ${product.id} is out of stock`,
            );
          }

          return queryRunner.manager.update(Product, product.id, {
            quantity: product.quantity - orderProductParam.quantity,
          });
        }),
      );

      // create orderItems
      const orderItems = await Promise.all(
        products.map(async (product) => {
          const orderProductParam = params.products.find(
            (itm) => itm.id === product.id,
          );
          return queryRunner.manager.save(
            new OrderItem({
              product: product,
              quantity: orderProductParam.quantity,
            }),
          );
        }),
      );

      // create order
      const order = await queryRunner.manager.save(
        new Order({
          orderItems,
          timestamp: new Date(),
          address: params.address,
          user,
        }),
      );
      await queryRunner.commitTransaction();

      await queryRunner.release();
      return order;
    }
  }
}
