import { Injectable } from '@nestjs/common';
import { Seeder } from 'nestjs-seeder';
import { ProductsShopRepository } from '../src/product-shop/product-shop.repository';
import { faker } from '@faker-js/faker';
import { Address } from '../src/product-shop/models/address.entity';
import { ProductsShop } from '../src/product-shop/models/products-shop.entity';
import { Product } from '../src/product/models/product.entity';
import { ProductsRepository } from '../src/product/product.repository';
import { generateRandomCoordinatesInEurope } from './utils';

@Injectable()
export class ProductsShopSeeder implements Seeder {
  constructor(
    private readonly productsShopRepository: ProductsShopRepository,
    private readonly productsRepository: ProductsRepository,
  ) {}

  async seed(): Promise<any> {
    const SHOPS_AMOUNT = 10;
    const ITEMS_AMOUNT = 100;

    const shops = [
      {
        title: 'Drugs 24',
        address: new Address(generateRandomCoordinatesInEurope()),
      },
      {
        title: 'Pharmacy',
        address: new Address(generateRandomCoordinatesInEurope()),
      },
      ...Array.from({ length: SHOPS_AMOUNT }, () => ({
        title: faker.company.name(),
        address: new Address(generateRandomCoordinatesInEurope()),
      })),
    ];

    // Fill the database with random shops
    const shopItems = await this.productsShopRepository.createMany(
      shops.map((shop) => new ProductsShop(shop)),
    );

    const products = Array.from({ length: ITEMS_AMOUNT }, () => {
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

    // Fill the database with random products
    const productsItems = await this.productsRepository.createMany(products);
    return productsItems;
  }

  async drop(): Promise<any> {}
}
