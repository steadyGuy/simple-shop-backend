import { seeder } from 'nestjs-seeder';

import { DatabaseModule } from 'database/database.module';
import { ProductsShopSeeder } from './product/seeders/products-shop.seeder';
import { ConfigModule } from '@nestjs/config';
import { Product } from './product/models/product.entity';
import { ProductsShop } from './product/models/products-shop.entity';
import { Order } from './order/models/order.entity';

seeder({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    DatabaseModule.forFeature([Product, ProductsShop, Order]),
  ],
  providers: [],
}).run([ProductsShopSeeder]);
