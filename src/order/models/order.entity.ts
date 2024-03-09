import { AbstractEntity } from 'database/abstract.entity';
import { Product } from 'src/product/models/product.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Order extends AbstractEntity<Order> {
  @Column()
  timestamp: Date;

  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;
}
