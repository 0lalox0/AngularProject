## Montesinos Propiedades — Frontend

Demo: [angular-project-beta-beryl.vercel.app](https://angular-project-beta-beryl.vercel.app) 🔗 Backend: [montesinos-backend](https://github.com/0lalox0/montesinos-backend)

## Stack

- **Angular 22** — standalone components, signals, nuevo control flow (`@for`)
- **Angular SSR** + **Express** — server-side rendering con rutas híbridas (prerender / server)
- **Apollo Angular** + **GraphQL** — consumo de datos en vez de REST/HttpClient
- **Reactive Forms** — formulario de postulación
- **Tailwind CSS 4**
- **TypeScript**
- Deploy en **Vercel**

## Features

- Listado de propiedades con foto, ciudad, estado y unidades disponibles.
- Filtro de propiedades por ciudad.
- Vista de detalle por propiedad (`/details/:id`).
- Formulario de postulación (nombre, apellido, email).
- Renderizado híbrido: la home se prerenderiza en build time y el detalle se renderiza en el servidor en cada request.

## Estructura del proyecto

```
src/app/
├── app.ts / app.html / app.css       # Shell de la app (header + router-outlet)
├── app.config.ts                     # Providers de la app (router, Apollo, hydration)
├── app.routes.ts                     # Rutas de cliente
├── app.routes.server.ts              # Rutas del servidor (modos de render)
├── graphql/
│   └── apollo.config.ts              # Configuración del cliente Apollo
├── home/                             # Página principal (listado + filtro)
├── house-card/                       # Card de propiedad
├── house-details/                    # Detalle + formulario de postulación
├── house.ts                          # Interfaz HouseInfo
└── house.service.ts                  # Queries/mutations GraphQL vía Apollo
```

## Requisitos previos

- Node.js 20+
- npm 10+

## Instalación

```bash
git clone https://github.com/0lalox0/AngularProject.git
cd AngularProject/montesinos-landing
npm install
```

## Variables de entorno

El cliente Apollo toma la URL del backend GraphQL de `globalThis.__ENV__.GRAPHQL_URI` en runtime. Si no se define, usa por defecto:

```
https://montesinos-backend.onrender.com/graphql
```

Para apuntar a un backend local, definí `GRAPHQL_URI` (por ejemplo `http://localhost:4000/graphql`) antes de que arranque la app.

## Desarrollo

```bash
npm start
```

Levanta el servidor de desarrollo en `http://localhost:4200`. La app se recarga automáticamente al guardar cambios.

## Build

```bash
npm run build
```

Genera el build de producción (browser + server) en `dist/montesinos-landing`.

## Correr con SSR (producción)

```bash
npm run build
npm run serve:ssr:montesinos-landing
```

Levanta el servidor Express de SSR en `http://localhost:4000` (o el puerto definido en `PORT`).

## Tests

```bash
npm test
```

Corre los tests unitarios con Vitest.

## Scripts disponibles

| Script | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo (`ng serve`) |
| `npm run build` | Build de producción |
| `npm run watch` | Build en modo watch (desarrollo) |
| `npm test` | Tests unitarios |
| `npm run serve:ssr:montesinos-landing` | Levanta el servidor SSR ya buildeado |

## Deploy

Desplegado en Vercel a partir de la carpeta `montesinos-landing`, usando `vercel.json` para el ruteo entre el build estático (prerender) y las funciones SSR.

## Roadmap / próximas mejoras

- Estados de carga y error en la UI (hoy los errores de la query se silencian).
- Validaciones en el formulario de postulación.
- Guards y resolvers en el routing.
- Lazy loading de rutas.
- Tests unitarios reales (hoy los `.spec.ts` son boilerplate).

## Autor

[Ladislao Bordón](https://github.com/0lalox0) — [LinkedIn](https://linkedin.com/in/ladislao-bordon/)
