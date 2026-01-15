import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // ✅ conexión MongoDB
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotasModule } from './Notas/notas.module'; // ⚠️ Respeta la N mayúscula


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ucab_tasks'), // ✅ conexión directa
    NotasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}