import { Module } from "@nestjs/common";
import { AppController } from "@/application/controllers/app.controller";
import { AppService } from "@/domain/services/app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "@/config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get("database")
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
