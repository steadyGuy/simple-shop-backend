import { AbstractEntity } from 'database/abstract.entity';

import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/product/models/product.entity';

@Entity()
export class OrderItem extends AbstractEntity<OrderItem> {
  @Column()
  quantity: number;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItems)
  @JoinColumn()
  product: Product;
}
