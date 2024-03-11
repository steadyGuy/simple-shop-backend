import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindAllItemsQueryDto {
  @ApiPropertyOptional()
  where?: string;

  @ApiPropertyOptional()
  sort?: string;

  @ApiPropertyOptional()
  take?: number;

  @ApiPropertyOptional()
  skip?: number;

  @ApiPropertyOptional()
  favouriteIds?: string;

  @ApiPropertyOptional()
  exceptFavouriteIds?: string;
}

export class FindItemsByIdsQueryDto {
  @ApiPropertyOptional()
  ids?: string;
}
