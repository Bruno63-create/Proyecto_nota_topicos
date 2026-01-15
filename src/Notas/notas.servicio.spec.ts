import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { NotasServicio } from './notas.servicio';
import { Nota } from './notas.entidad';

describe('NotasServicio', () => {
  let servicio: NotasServicio;

  const mockNotas = [
    {
      _id: 'abc123',
      titulo: 'Auditoría',
      fechaCreacion: new Date('2026-01-01'),
      fechaModificacion: new Date('2026-01-02'),
    },
    {
      _id: 'def456',
      titulo: 'Checklist',
      fechaCreacion: new Date('2026-01-03'),
      fechaModificacion: new Date('2026-01-04'),
    },
  ];

  const mockNotaModel = {
    find: jest.fn().mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockNotas),
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotasServicio,
        {
          provide: getModelToken(Nota.name),
          useValue: mockNotaModel,
        },
      ],
    }).compile();

    servicio = module.get<NotasServicio>(NotasServicio);
  });

  it('debería listar las notas', async () => {
    const resultado = await servicio.listar();
    expect(resultado).toHaveLength(2);
    expect(resultado[0].titulo).toBe('Auditoría');
    expect(resultado[1].id).toBe('def456');
  });
});