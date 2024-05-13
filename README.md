# Script en TypeScript para Obtener Posts

Este script en TypeScript utiliza Axios para obtener datos de una API RESTful y muestra algunos procesamientos simples de los datos recibidos.

## Requisitos previos
- Node.js v20 o superior
- Acceso a Internet para realizar solicitudes a la API

## Instrucciones de ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone git@github.com:IonVillarreal/demo-axios-ts.git
   ```

2. **Instalar dependencias:**
   ```bash
   cd demo-axios-ts
   npm install
   ```

3. **Ejecutar el script:**
   ```bash
   npx ts-node index.ts
   ```

El script utilizará Axios para realizar una solicitud a `https://jsonplaceholder.typicode.com/posts/`, imprimirá los títulos de los posts en la consola y mostrará los títulos de los posts con más de 20 caracteres.
