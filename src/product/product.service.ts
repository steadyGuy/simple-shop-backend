import { Injectable } from '@nestjs/common';
import * as qs from 'qs';
import { ProductsRepository } from './product.repository';
import {
  FindAllItemsQueryDto,
  FindItemsByIdsQueryDto,
} from './dto/find-all-items-query.dto';
import { ITEMS_PER_PAGE } from 'consts/units.constant';
import { In, Not } from 'typeorm';
@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async findAll(params: FindAllItemsQueryDto) {
    const take = params.take ? params.take : ITEMS_PER_PAGE;
    let where = qs.parse(params.where);

    let favouriteProducts = [];
    // If the request contains favouriteIds, and sort then
    // we need to fetch the favourite products first and then the rest
    if (params.favouriteIds && params.sort) {
      favouriteProducts = await this.productsRepository.find({
        order: qs.parse(params.sort),
        where: { ...where, id: In(params.favouriteIds.split(',')) },
      });
      // after we get the favourite products, we need to remove them from the list of products
      where = {
        ...where,
        id: Not(In(params.favouriteIds.split(','))) as any,
      };
    }

    const products = await this.productsRepository.find({
      ...params,
      take: take + 1,
      order: qs.parse(params.sort),
      where,
    });

    const hasMore = products.length === take + 1;

    return {
      items: hasMore
        ? favouriteProducts.concat(products.slice(0, take))
        : favouriteProducts.concat(products),
      hasMore,
    };
  }

  async findByIds(params: FindItemsByIdsQueryDto) {
    const items = await this.productsRepository.find({
      where: { id: In(params.ids.split(',')) },
      relations: ['shop', 'shop.address'],
    });

    return {
      items,
      hasMore: false,
    };
  }
}
