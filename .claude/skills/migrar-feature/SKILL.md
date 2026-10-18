---
name: migrar-feature
description: Migra una parte del código existente a la estructura objetivo de docs/ARQUITECTURA.md (fase 3), un feature por PR y sin cambiar comportamiento. Úsalo cuando se pida reorganizar carpetas o mover componentes a features.
---

# Migrar un feature a la estructura objetivo

Objetivo: mover archivos de `components/<tipo>/`, `helpers/`, `layout/` y `routes/` a `app/`, `features/`,
`components/ui`, `components/layout`, `lib/` según `docs/ARQUITECTURA.md`, **sin cambiar lo que ve el usuario**.

## Pasos

1. **Elige un solo feature** (por ejemplo `contact`: `pages/Contact.jsx` + `components/containers/ContainerContact.jsx`).
   Crea la rama `refactor/migrar-<feature>` desde `main` actualizado.
2. **Inventario**: lista los archivos del feature y quién los importa
   (`grep -rn "ContainerContact" src`). Anota en qué carpeta destino va cada uno.
3. **Mueve con `git mv`** para conservar el historial. Primer commit: solo movimientos y ajuste de imports,
   tipo `refactor(<feature>): mover a features/<feature>`.
4. **API pública**: crea `src/features/<feature>/index.js` exportando lo que usan las páginas, y cambia los imports
   de las páginas para que pasen por él.
5. **Comprueba las reglas de capas**: el feature no importa otro feature; si comparte algo, súbelo a `components/ui`,
   `hooks/` o `lib/` en un commit aparte.
6. **Sin cambios de lógica.** Si detectas un error, anótalo para otro PR; no lo arregles aquí.
7. **Verifica**: `npm run lint`, `npm run build` y recorre en `npm run preview` las páginas afectadas.
8. Abre el PR con la skill `preparar-pr`, título `refactor(<feature>): migrar a la estructura por funcionalidad`.

## Orden sugerido

`config` y `lib` → `components/ui` (desde `components/base`) → `components/layout` → `contact` → `about` → `tools`
(solo si Login, Calculador y Followers siguen en el sitio) → `app/` (App, router, providers).
