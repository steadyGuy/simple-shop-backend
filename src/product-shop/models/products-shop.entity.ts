import { AbstractEntity } from 'database/abstract.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Product } from '../../product/models/product.entity';
import { Address } from './address.entity';

@Entity()
export class ProductsShop extends AbstractEntity<ProductsShop> {
  @OneToMany(() => Product, (product) => product.shop)
  products: Product[];

  @Column()
  title: string;

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn()
  address: Address;
}
