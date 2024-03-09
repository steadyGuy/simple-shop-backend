import { AbstractEntity } from 'database/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';
import { Factory } from 'nestjs-seeder';

@Entity()
export class ProductsShop extends AbstractEntity<ProductsShop> {
  @OneToMany(() => Product, (product) => product.shop)
  products: Product[];

  @Factory((faker) => faker.commerce.productName())
  @Column()
  title: string;
}
