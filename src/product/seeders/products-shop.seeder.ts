import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { ProductsShopRepository } from '../product-shop.repository';
import { faker } from '@faker-js/faker';
import { Address } from '../models/address.entity';
import { ProductsShop } from '../models/products-shop.entity';
import { Product } from '../models/product.entity';
import { ProductsRepository } from '../product.repository';

@Injectable()
export class ProductsShopSeeder implements Seeder {
  constructor(
    private readonly productsShopRepository: ProductsShopRepository,
    private readonly productsRepository: ProductsRepository,
  ) {}

  async seed(): Promise<any> {
    const SHOPS_AMOUNT = 10;
    const ITEMS_AMOUNT = 1000;
    const shops = [
      {
        title: 'Drugs 24',
        address: new Address({
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude(),
        }),
      },
      {
        title: 'Pharmacy',
        address: new Address({
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude(),
        }),
      },
      ...Array.from({ length: SHOPS_AMOUNT }, () => ({
        title: faker.company.name(),
        address: new Address({
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude(),
        }),
      })),
    ];

    const shopItems = await this.productsShopRepository.createMany(
      shops.map((shop) => new ProductsShop(shop)),
    );

    const items = Array.from({ length: ITEMS_AMOUNT }, () => {
      const randomShopIndex = Math.floor(Math.random() * shopItems.length);
      return new Product({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: Number(faker.commerce.price()),
        quantity: faker.number.int({ min: 0, max: 100 }),
        image: faker.image.url({
          width: 1018,
          height: 882,
        }),
        timestamp: faker.date.recent(),
        shop: shopItems[randomShopIndex],
      });
    });

    const itemsItems = await this.productsRepository.createMany(items);
    return itemsItems;
  }

  async drop(): Promise<any> {}
}
