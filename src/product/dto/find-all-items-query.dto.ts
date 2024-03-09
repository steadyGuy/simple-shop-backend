import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindAllItemsQueryDto {
  @ApiPropertyOptional({ name: 'filters' })
  where?: { [key: string]: any };
  @ApiPropertyOptional()
  sort?: { [key: string]: 'ASC' | 'DESC' };
  @ApiPropertyOptional({ name: 'limit' })
  take?: number;
  @ApiPropertyOptional()
  skip?: number;
}
