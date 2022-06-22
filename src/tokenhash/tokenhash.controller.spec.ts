import { Test, TestingModule } from '@nestjs/testing';
import { TokenhashController } from './tokenhash.controller';

describe('TokenhashController', () => {
  let controller: TokenhashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenhashController],
    }).compile();

    controller = module.get<TokenhashController>(TokenhashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
