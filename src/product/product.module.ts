import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DatabaseModule } from 'database/database.module';
import { Product } from './models/product.entity';
import { ProductsRepository } from './product.repository';
import { LoggerModule } from 'logger';
import { ProductsService } from './product.service';
import { ProductsShop } from './models/products-shop.entity';
import { Order } from 'src/order/models/order.entity';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Product, ProductsShop, Order]),
    LoggerModule,
  ],
  controllers: [ProductController],
  providers: [ProductsRepository, ProductsService],
})
export class ProductModule {}
