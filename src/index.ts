// Feature: cmf-prudential-metrics — Punto de entrada del servidor

import { orquestador } from './domain/orquestador';
import { app } from './adapters/api/app';

async function bootstrap(): Promise<void> {
  // Inicializar todos los motores y sus suscripciones al bus de eventos
  orquestador.inicializar();

  const port = Number(process.env.PORT ?? 3000);
  const host = process.env.HOST ?? '0.0.0.0';

  await app.listen({ port, host });
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
