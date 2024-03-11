import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { DatabaseModule } from 'database/database.module';
import { Product } from './models/product.entity';
import { ProductsRepository } from './product.repository';

import { ProductsService } from './product.service';
import { Order } from 'src/order/models/order.entity';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([Product, Order])],
  controllers: [ProductController],
  exports: [ProductsRepository],
  providers: [ProductsRepository, ProductsService],
})
export class ProductModule {}
