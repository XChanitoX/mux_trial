# Mux Live Streaming Setup

## Descripción

Este proyecto implementa la creación de transmisiones en vivo (live streams) utilizando la API de Mux, una plataforma de video profesional que permite el manejo de contenido multimedia a través de APIs.

## Tecnologías Utilizadas

- Node.js
- Mux Video API
- dotenv (para manejo de variables de entorno)

## Requisitos Previos

- Cuenta en Mux.com
- Node.js instalado
- Variables de entorno configuradas:
  - `MUX_TOKEN_ID`
  - `MUX_TOKEN_SECRET`

## Funcionalidad

El script realiza las siguientes operaciones:

1. Configura la conexión con Mux utilizando credenciales seguras
2. Crea una nueva transmisión en vivo con las siguientes características:
   - Política de reproducción pública
   - Configuración automática para nuevos assets
   - Generación de puntos de conexión para streaming

## Instalación

```bash
npm install @mux/mux-node dotenv
```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto
2. Añade tus credenciales de Mux:

```env
MUX_TOKEN_ID=tu_token_id
MUX_TOKEN_SECRET=tu_token_secret
```

## Uso

Para ejecutar el script:

```bash
node index.js
```

## Respuesta

Al ejecutar el script, se creará una nueva transmisión en vivo y se mostrará en consola un objeto con toda la información de la transmisión, incluyendo:

- Stream Key
- RTMP URL
- ID de la transmisión
- URLs de reproducción

## Consideraciones de Seguridad

- Nunca compartas tus credenciales de Mux
- Mantén el archivo `.env` en el .gitignore
- Considera implementar políticas de reproducción más restrictivas según tus necesidades

## Documentación Adicional

- [Documentación oficial de Mux](https://docs.mux.com)
- [API Reference de Live Streaming](https://docs.mux.com/api-reference/video/operation/create-live-stream)

## Soporte

Para problemas o preguntas, consulta:

- [Documentación de Mux](https://docs.mux.com)
- [Foro de la comunidad de Mux](https://forum.mux.com)
