import { Test, TestingModule } from '@nestjs/testing';
import { ToDoControllerController } from './to-do-controller.controller';

describe('ToDoControllerController', () => {
  let controller: ToDoControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToDoControllerController],
    }).compile();

    controller = module.get<ToDoControllerController>(ToDoControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
