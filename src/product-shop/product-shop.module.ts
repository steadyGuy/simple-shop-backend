import { Module } from '@nestjs/common';

import { DatabaseModule } from 'database/database.module';

import { ProductsShopService } from './products-shop.service';
import { ProductsShopRepository } from './product-shop.repository';
import { ProductsShop } from 'src/product-shop/models/products-shop.entity';
import { Address } from 'src/product-shop/models/address.entity';
import { ProductsShopController } from './product-shop.controller';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([ProductsShop, Address])],
  controllers: [ProductsShopController],
  providers: [ProductsShopService, ProductsShopRepository],
})
export class ProductsShopModule {}
