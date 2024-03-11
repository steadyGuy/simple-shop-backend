import { Body, Controller, Post } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './order.service';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiQuery({ type: CreateOrderDto })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }
}
