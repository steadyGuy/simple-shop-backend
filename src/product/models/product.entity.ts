import { AbstractEntity } from 'database/abstract.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ProductsShop } from '../../product-shop/models/products-shop.entity';
import { OrderItem } from 'src/order/models/order-item.entity';

@Entity()
export class Product extends AbstractEntity<Product> {
  @Column()
  timestamp: Date;

  @ManyToOne(() => ProductsShop, (shop) => shop.products)
  shop: ProductsShop;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  quantity: number;
}
