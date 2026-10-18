# MNSLVS Solutions · www.mnslvs.com

Sitio web de MNSLVS Solutions, hecho con React, Vite y Tailwind, y publicado en AWS S3 + CloudFront.

## Requisitos

- Node.js 20 o superior
- npm

## Uso

```bash
npm ci            # instalar dependencias
npm run dev       # servidor de desarrollo en http://localhost:3500
npm run lint      # revisar el código
npm run format    # formatear con Prettier
npm run build     # build de producción en dist/
npm run preview   # servir el build en local
```

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: build, `aws s3 sync` al bucket y invalidación de
CloudFront. Por eso todo cambio entra por pull request con CI en verde.

## Documentación

- [Guía de contribución](CONTRIBUTING.md): ramas, commits, pull requests y requisitos para fusionar.
- [Arquitectura](docs/ARQUITECTURA.md): estructura de carpetas, reglas y decisiones técnicas.

## Datos del sitio

Contacto, redes sociales y textos generales se editan en `src/config/site.js`.
- [CLAUDE.md](CLAUDE.md): contexto para agentes de IA; subagentes, skills y hooks en `.claude/`.
