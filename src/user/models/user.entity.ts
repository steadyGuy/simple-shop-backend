import { AbstractEntity } from 'database/abstract.entity';
import { Order } from 'src/order/models/order.entity';

import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
