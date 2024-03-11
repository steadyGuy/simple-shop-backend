import { AbstractEntity } from 'database/abstract.entity';

import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../user/models/user.entity';
import { OrderItem } from './order-item.entity';

@Entity()
export class Order extends AbstractEntity<Order> {
  @Column()
  timestamp: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column()
  address: string;
}
