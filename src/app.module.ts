import { Module } from '@nestjs/common';

import { ProductModule } from './product/product.module';
import { LoggerModule } from 'logger';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule,
    ProductModule,
  ],
  controllers: [],

  providers: [ProductModule],
})
export class AppModule {}
