import { Controller, Get, Param } from '@nestjs/common';

import { ProductsShopService } from './products-shop.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product-shops')
@Controller('product-shops')
export class ProductsShopController {
  constructor(private readonly productsShopService: ProductsShopService) {}

  @Get()
  findAll() {
    return this.productsShopService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id') id) {
    return this.productsShopService.findById(id);
  }
}
