import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}
