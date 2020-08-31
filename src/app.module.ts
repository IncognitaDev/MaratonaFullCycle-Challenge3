import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm'
import { categorias } from './models/categorias.model'
import { ConfigModule } from '@nestjs/config'
import { CategoriasController } from './categorias/categorias.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      //@ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      database: process.env.TYPEORM_DATABASE,
      entities: [categorias],
    }),
    TypeOrmModule.forFeature([categorias])
  ],
  controllers: [AppController, CategoriasController],
  providers: [AppService],
})
export class AppModule {}
