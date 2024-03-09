import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './product.service';
import { ProductsShopService } from './products-shop.service';
import { FindAllItemsQueryDto } from './dto/find-all-items-query.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly productsShopService: ProductsShopService,
  ) {}

  @Get()
  @ApiQuery({ type: FindAllItemsQueryDto })
  findAll(@Query() queryParams: FindAllItemsQueryDto) {
    return this.productsService.findAll(queryParams);
  }

  @Get('data')
  findAllShops() {
    return this.productsShopService.findAll();
  }
}
