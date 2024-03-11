import { Module } from '@nestjs/common';

import { ProductModule } from './product/product.module';
import { LoggerModule } from 'logger';
import { ConfigModule } from '@nestjs/config';
import { ProductsShopModule } from './product-shop/product-shop.module';

import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule,
    ProductModule,
    ProductsShopModule,
    OrderModule,
  ],
  controllers: [],

  providers: [ProductModule],
})
export class AppModule {}
