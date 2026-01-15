# UCAB Tasks - Proyecto de Notas con NestJS y MongoDB

Este proyecto fue desarrollado como parte de la materia **Tópicos de Programación** en la UCAB.  
El objetivo es implementar un sistema de gestión de notas utilizando **NestJS**, **MongoDB** y pruebas unitarias con **Jest**.

## Tecnologías utilizadas
- [NestJS](https://nestjs.com/) - Framework backend modular
- [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL
- [Mongoose](https://mongoosejs.com/) - ODM para modelar datos
- [Jest](https://jestjs.io/) - Framework de pruebas unitarias

## Configuración y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/ucab-tasks.git
   cd ucab-tasks

## Para instalar dependencias:

npm install

## Configurar conexion a MongoDB en .env

MONGO_URL=mongodb://localhost:27017/ucab_tasks

## Ejecutar el servidor en modo desarrollo:

npm run start:dev

## Endpoints disponibles

- POST /notas → Crear nota
- GET /notas → Listar notas
- GET /notas/:titulo → Obtener detalle por título
- PUT /notas/:titulo → Actualizar nota
- DELETE /notas → Eliminar notas por lista de títulos

## Pruebas unitarias con Jest

it('debería listar las notas', async () => {
  const resultado = await servicio.listar();
  expect(resultado).toHaveLength(2);
  expect(resultado[0].titulo).toBe('Auditoría');
});

## Ejecutar pruebas

npm run test


Con este README cumples lo que pide tu profesor: explicación del proyecto, detalle de la prueba unitaria, y pasos para correrlo.  

¿Quieres que te prepare también un **ejemplo de salida real** (captura de consola o JSON de respuesta de la API) para incluirlo en el README y hacerlo más completo?

