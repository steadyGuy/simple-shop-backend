import { seeder } from 'nestjs-seeder';

import { DatabaseModule } from 'database/database.module';
import { ProductsShopSeeder } from '../seeders/shop-data.seeder';
import { ConfigModule } from '@nestjs/config';
import { Product } from './product/models/product.entity';
import { ProductsShop } from './product-shop/models/products-shop.entity';
import { Order } from './order/models/order.entity';

import { Address } from './product-shop/models/address.entity';
import { ProductsShopRepository } from './product-shop/product-shop.repository';
import { ProductsRepository } from './product/product.repository';
import { User } from './user/models/user.entity';
import { OrderItem } from './order/models/order-item.entity';

seeder({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    DatabaseModule.forFeature([
      Product,
      ProductsShop,
      OrderItem,
      Order,
      Address,
      User,
    ]),
  ],
  providers: [ProductsShopRepository, ProductsRepository],
}).run([ProductsShopSeeder]);
