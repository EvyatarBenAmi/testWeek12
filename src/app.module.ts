import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BusinessModule } from './business/business.module';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'idf_procurement',
    autoLoadModels: true,
    synchronize: true,
  }), BusinessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
