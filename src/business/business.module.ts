import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './item.model';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
