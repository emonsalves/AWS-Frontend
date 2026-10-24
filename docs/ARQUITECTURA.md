# Arquitectura del frontend

Cómo está organizado el código y hacia dónde queremos llevarlo para que crezca sin desordenarse.

## Stack

| Pieza | Elección | Motivo |
| --- | --- | --- |
| UI | React 18 | Ecosistema y equipo |
| Build | Vite 6 + SWC | Arranque y build rápidos |
| Rutas | React Router 7 | Carga diferida por página |
| Estilos | Tailwind 4 + tokens (`src/styles/tokens.js`, cargados con `@config`) | Diseño consistente, modo oscuro con `dark:` |
| Calidad | ESLint + Prettier | Mismo estilo para todos |
| Despliegue | GitHub Actions → S3 + CloudFront | `main` = producción |

## Estructura objetivo

Organizamos por **funcionalidad** (feature), no por tipo de archivo. Todo lo de una sección del sitio vive junto,
y lo reutilizable vive en `components/ui`.

```
src/
├── app/                 # Arranque: App.jsx, router, providers
│   ├── App.jsx
│   ├── router.jsx
│   └── providers/       # ThemeProvider y futuros contextos globales
├── pages/               # Una página por ruta; solo compone features y layout
│   ├── HomePage.jsx
│   └── ...
├── features/            # Lógica y componentes propios de cada sección
│   ├── contact/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.js     # API pública del feature
│   ├── about/
│   ├── calculator/      # Calculador de vuelto y propina
│   └── followers/       # Análisis de seguidores y seguidos
├── components/
│   ├── ui/              # Button, Input, Card, Container: sin lógica de negocio
│   └── layout/          # Header, Footer, LayoutPublic
├── hooks/               # Hooks genéricos (useTheme, useMediaQuery...)
├── lib/                 # Utilidades puras sin React (formatos, validaciones)
├── config/              # Datos del sitio: contacto, redes, SEO, menú
├── styles/              # tokens, themes, CSS global
└── assets/              # Imágenes e iconos importados desde el código
```

### Reglas de dependencias

```
pages → features → components/ui, hooks, lib, config
```

- Una `page` puede importar features; un feature **no** importa otro feature (si lo necesita, se sube a `components/` o `lib/`).
- `components/ui` no conoce features ni páginas.
- Cada feature expone lo que usa el resto desde su `index.js`.
- `config/` no importa nada de React.

### Convenciones de nombres

| Qué | Formato | Ejemplo |
| --- | --- | --- |
| Componentes | `PascalCase.jsx` | `ContactCard.jsx` |
| Hooks | `useAlgo.js` | `useTheme.js` |
| Utilidades y config | `camelCase.js` | `site.js`, `formatCurrency.js` |
| Carpetas | `kebab-case` o una palabra | `features/contact` |
| Rutas URL | minúsculas en español | `/contacto`, `/nosotros` |

## Decisiones

- **Un solo sistema de tema.** `useTheme` de `src/hooks/useTheme.js` + clases `dark:` de Tailwind. No se usan
  condicionales `darkMode ? 'a' : 'b'` en componentes nuevos.
- **Datos del sitio en `src/config/site.js`.** Contacto, redes y textos de SEO se editan en un solo lugar.
- **Carga diferida por ruta** con `lazy(() => import(...))`. Nunca retrasos artificiales.
- **Sin dependencias que no se usan.** Antes de añadir una librería, comprobar si el navegador o React ya lo resuelven.
- **Accesibilidad por defecto:** navegación con `<Link>`/`<NavLink>`, `label` asociado a cada campo, `lang="es"`.

## Migración

La estructura actual (`components/<tipo>/`, `helpers/`, `layout/`, `routes/`) se migra de forma gradual:

1. Código nuevo ya va en la estructura objetivo (`src/config/` se crea en la fase 1).
2. En la fase 3 del plan de acción se mueven los archivos existentes, un feature por PR, con `refactor:` como tipo.
3. No se mezclan movimientos de archivos con cambios de lógica en el mismo commit.
