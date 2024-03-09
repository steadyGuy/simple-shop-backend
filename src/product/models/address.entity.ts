import { AbstractEntity } from 'database/abstract.entity';

import { Column, Entity } from 'typeorm';

@Entity()
export class Address extends AbstractEntity<Address> {
  @Column({ type: 'decimal', precision: 10, scale: 6 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 6 })
  longitude: number;
}
