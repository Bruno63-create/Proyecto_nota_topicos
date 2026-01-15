import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nota, NotaDocument } from './notas.entidad';

import { CrearNotaDto } from './dto/crear-nota.dto';
import { NotaResumenDto } from './dto/nota-resumen.dto';
import { NotaDetalleDto } from './dto/nota-detalle.dto';
import { EliminarNotaDto } from './dto/eliminar-nota.dto';
import { ActualizarNotaDto } from './dto/actualizar-nota.dto';

@Injectable()
export class NotasServicio {
  constructor(
    @InjectModel(Nota.name) private readonly notaModel: Model<NotaDocument>,
  ) {}

  // ✅ Crear nota
  async crear(dto: CrearNotaDto): Promise<NotaDetalleDto> {
    const nuevaNota = new this.notaModel({
      titulo: dto.titulo.trim(),
      contenido: dto.contenido.trim(),
      fechaCreacion: new Date(),
      fechaModificacion: new Date(),
    });

    const nota = await nuevaNota.save();

    return {
      id: nota._id.toString(),
      titulo: nota.titulo,
      contenido: nota.contenido,
      fechaCreacion: nota.fechaCreacion,
      fechaModificacion: nota.fechaModificacion,
    };
  }

  // ✅ Listar notas (sin contenido)
  async listar(): Promise<NotaResumenDto[]> {
    const notas = await this.notaModel.find().exec();
    return notas.map(n => ({
      id: n._id.toString(),
      titulo: n.titulo,
      fechaCreacion: n.fechaCreacion,
      fechaModificacion: n.fechaModificacion,
    }));
  }

  // ✅ Obtener detalle por título
  async obtenerPorTitulo(titulo: string): Promise<NotaDetalleDto> {
    const nota = await this.notaModel.findOne({ titulo }).exec();
    if (!nota) {
      throw new NotFoundException(`Nota con título "${titulo}" no encontrada`);
    }

    return {
      id: nota._id.toString(),
      titulo: nota.titulo,
      contenido: nota.contenido,
      fechaCreacion: nota.fechaCreacion,
      fechaModificacion: nota.fechaModificacion,
    };
  }

  // ✅ Actualizar por título
  async actualizarPorTitulo(titulo: string, dto: ActualizarNotaDto): Promise<NotaDetalleDto> {
    const nota = await this.notaModel.findOneAndUpdate(
      { titulo },
      {
        ...(dto.titulo ? { titulo: dto.titulo.trim() } : {}),
        ...(dto.contenido ? { contenido: dto.contenido.trim() } : {}),
        fechaModificacion: new Date(),
      },
      { new: true },
    ).exec();

    if (!nota) {
      throw new NotFoundException(`Nota con título "${titulo}" no encontrada`);
    }

    return {
      id: nota._id.toString(),
      titulo: nota.titulo,
      contenido: nota.contenido,
      fechaCreacion: nota.fechaCreacion,
      fechaModificacion: nota.fechaModificacion,
    };
  }

  // ✅ Eliminar por lista de títulos
  async eliminar(dto: EliminarNotaDto): Promise<{ eliminadas: number }> {
    const result = await this.notaModel.deleteMany({
      titulo: { $in: dto.titulos },
    }).exec();

    return { eliminadas: result.deletedCount ?? 0 };
  }
}