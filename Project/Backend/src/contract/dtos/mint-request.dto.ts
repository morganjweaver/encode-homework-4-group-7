import { ApiProperty } from '@nestjs/swagger';

export class MintRequestDto {
  @ApiProperty({
    required: true,
    description: 'Address that will receive the tokens',
    example: '0x74121B1461631a021Dd36528baeBeCB45e61552f',
    minLength: 42,
    maxLength: 42,
  })
  address: string;

  @ApiProperty({
    required: true,
    description: 'TokenId',
    example: 42,
    minimum: 0,
  })
  tokenId: number;
}
