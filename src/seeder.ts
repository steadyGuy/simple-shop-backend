import { seeder } from 'nestjs-seeder';

import { DatabaseModule } from 'database/database.module';
import { ProductsShopSeeder } from './product/seeders/products-shop.seeder';
import { ConfigModule } from '@nestjs/config';
import { Product } from './product/models/product.entity';
import { ProductsShop } from './product/models/products-shop.entity';
import { Order } from './order/models/order.entity';

import { Address } from './product/models/address.entity';
import { ProductsShopRepository } from './product/product-shop.repository';
import { ProductsRepository } from './product/product.repository';

seeder({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    DatabaseModule.forFeature([Product, ProductsShop, Order, Address]),
  ],
  providers: [ProductsShopRepository, ProductsRepository],
}).run([ProductsShopSeeder]);
