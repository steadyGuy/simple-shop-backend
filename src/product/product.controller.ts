import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './product.service';

import {
  FindAllItemsQueryDto,
  FindItemsByIdsQueryDto,
} from './dto/find-all-items-query.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiQuery({ type: FindAllItemsQueryDto })
  findAll(@Query() queryParams: FindAllItemsQueryDto) {
    return this.productsService.findAll(queryParams);
  }

  @Get('ids')
  @ApiQuery({ type: FindItemsByIdsQueryDto })
  findByIds(@Query() queryParams: FindItemsByIdsQueryDto) {
    return this.productsService.findByIds(queryParams);
  }
}
