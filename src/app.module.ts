import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { PerfilesModule } from './perfiles/perfiles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // Usa ConfigService para leer el .env de forma segura
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),

    MoviesModule,
    PerfilesModule,
  ],
})
export class AppModule {}
