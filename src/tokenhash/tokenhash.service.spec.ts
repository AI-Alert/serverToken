import { Test, TestingModule } from '@nestjs/testing';
import { TokenhashService } from './tokenhash.service';

describe('TokenhashService', () => {
  let service: TokenhashService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenhashService],
    }).compile();

    service = module.get<TokenhashService>(TokenhashService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
