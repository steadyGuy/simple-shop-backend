import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrdersRepository } from './order.repository';

import { Order } from './models/order.entity';
import { DatabaseModule } from 'database/database.module';
import { User } from 'src/user/models/user.entity';
import { OrdersService } from './order.service';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';
import { OrderItem } from './models/order-item.entity';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Order, User, OrderItem]),
    ProductModule,
    UserModule,
  ],
  controllers: [OrderController],
  providers: [OrdersRepository, OrdersService],
})
export class OrderModule {}
