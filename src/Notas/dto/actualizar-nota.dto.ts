import { IsOptional, IsString } from 'class-validator';

export class ActualizarNotaDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  contenido?: string;
}