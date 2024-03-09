import { AbstractEntity } from 'database/abstract.entity';
import { Order } from 'src/order/models/order.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ProductsShop } from './products-shop.entity';

@Entity()
export class Product extends AbstractEntity<Product> {
  @Column()
  timestamp: Date;

  @OneToMany(() => Order, (order) => order.product)
  orders: Order[];

  @ManyToOne(() => ProductsShop, (shop) => shop.products)
  shop: ProductsShop;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  price: number;
}
