import { ApiProperty } from '@nestjs/swagger';

export class MetadataDto {
  @ApiProperty({
    required: true,
    description: 'Name of this NFT',
    examples: ['Foo', 'Bar', 'Punk #6539'],
  })
  name: string;
  @ApiProperty({
    required: false,
    description: 'Description for this NFT',
  })
  description?: string;
  @ApiProperty({
    required: false,
    description: 'Artist name',
  })
  artist?: string;
  @ApiProperty({
    required: false,
    description: 'Owner name',
  })
  owner?: string;
  @ApiProperty({
    required: false,
    description: 'Timestamp of creation date of this object',
  })
  timestamp?: number;
  @ApiProperty({
    required: false,
    description: 'Given type for this object',
    examples: ['NFT', 'SBT', 'xNFT', 'Undefined'],
  })
  type?: string;
  @ApiProperty({
    required: false,
    description: 'Given class for this object',
    examples: ['Legendary', 'Common', 'Super rare', 'Steven'],
  })
  class?: string;
  @ApiProperty({
    required: false,
    description: 'Selling price in ETH if for sale',
    examples: [0.1, 0.001, 42, 1000],
  })
  price?: number;
}
