# Votes For Bands

## Description
Realizamos una aplicacion en tiempo real que permite ingresar bandas que se listan en una tabla en la que podemos interactuar y realizar votos, estas se mostraran en un grafico que visualizara los votos de cada banda participante.
En la lista podremos dar un voto, eliminar y despues tendremos un input en el que podemos agregar una nueva banda.

## Aplicacion con Frontend en Next Js 13
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->


## El backend en Node js
Este es un servidor que maneja la comunicacion en tiempo real con el framework `SocketIO`, quien se va a encargar de recibir peticiones en tiempo real y va a compartir los mensajes entre usuarios conectados.


## Instalacion y Configuracion Backend

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias utilizando el comando `npm install`.
3. Configura las variables de entorno en el archivo `.env` siguiendo el ejemplo del archivo `.env.example`.
4. Ejecuta el comando `npm start` para iniciar la aplicación.

## Ejemplos de uso

### Comunicación en tiempo real con Socket.IO

Para probar la comunicación en tiempo real con Socket.IO, sigue estos pasos:

1. Abre dos o más navegadores web diferentes en tu máquina.
2. En cada navegador, navega hasta la página de tu aplicación que utiliza Socket.IO.
3. Interactúa con tu aplicación en uno de los navegadores (por ejemplo, envía mensajes o realiza acciones).
4. Observa cómo la información se actualiza en tiempo real en los otros navegadores abiertos, reflejando los cambios realizados.
5. Realiza acciones adicionales en diferentes navegadores y comprueba cómo se sincroniza la información entre ellos a través de Socket.IO.