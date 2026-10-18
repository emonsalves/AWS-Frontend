# Guía de contribución

Reglas para mantener el repositorio ordenado: ramas, commits, pull requests y calidad mínima antes de fusionar.
La estructura de carpetas y las decisiones técnicas están en [docs/ARQUITECTURA.md](docs/ARQUITECTURA.md).

## Flujo de trabajo

1. Crea una rama desde `main` actualizado.
2. Haz commits pequeños siguiendo [Conventional Commits](#commits).
3. Ejecuta `npm run lint` y `npm run build` antes de subir.
4. Abre un pull request hacia `main` usando la plantilla.
5. Fusiona solo con CI en verde. `main` se despliega automáticamente a producción (www.mnslvs.com).

Nunca se hace push directo a `main`.

## Ramas

Formato: `<tipo>/<descripcion-corta-en-kebab-case>`

| Tipo | Uso | Ejemplo |
| --- | --- | --- |
| `feat/` | Funcionalidad nueva | `feat/formulario-contacto` |
| `fix/` | Corrección de un error | `fix/menu-movil-teclado` |
| `perf/` | Mejora de rendimiento | `perf/lazy-routes` |
| `refactor/` | Cambio interno sin cambio visible | `refactor/unificar-tema` |
| `docs/` | Documentación | `docs/readme` |
| `chore/` | Dependencias, configuración, CI | `chore/actualizar-vite` |

Una rama = un objetivo. Si un cambio crece mucho, divídelo en varios PR.

## Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/):

```
<tipo>(<alcance opcional>): <descripción en imperativo, minúsculas, sin punto final>

<cuerpo opcional: el porqué del cambio>

<pie opcional: BREAKING CHANGE: ..., Closes #123>
```

Tipos permitidos:

| Tipo | Cuándo |
| --- | --- |
| `feat` | Nueva funcionalidad visible |
| `fix` | Corrección de un error |
| `perf` | Mejora de rendimiento |
| `refactor` | Reorganización sin cambiar comportamiento |
| `style` | Formato o estilos de código (no CSS visual) |
| `docs` | Solo documentación |
| `test` | Añadir o corregir pruebas |
| `build` | Dependencias o sistema de build |
| `ci` | Workflows de GitHub Actions |
| `chore` | Mantenimiento que no encaja en lo anterior |

Ejemplos:

```
feat(contacto): añadir formulario con validación
fix(navbar): permitir navegar el menú con teclado
perf(router): cargar cada página solo al visitarla
build(deps): eliminar dependencias sin uso
```

Buenas prácticas:

- Un commit hace una sola cosa y deja el proyecto compilando.
- La descripción dice qué cambia; el cuerpo, por qué.
- No mezcles formato masivo con cambios de lógica.
- Nada de mensajes como `update`, `fix`, `cambios` o `Update src/pages/Login.jsx`.

## Pull requests

- **Título:** mismo formato que un commit (`feat(home): nueva sección de servicios`). La CI lo valida.
- **Descripción:** completa la plantilla (qué cambia, por qué, cómo probarlo, capturas si hay cambios visuales).
- **Tamaño:** idealmente menos de 400 líneas cambiadas. Si es más grande, explica por qué o divídelo.
- **Fusión:** usa *Create a merge commit*; cada commit de la rama llega a `main`, así que todos deben seguir Conventional Commits.
- **Rama:** se borra después de fusionar.

### Requisitos para fusionar

- [ ] CI en verde (lint, build y título del PR).
- [ ] Probado en local con `npm run dev` o `npm run preview`.
- [ ] Sin `console.log` de depuración ni código comentado.
- [ ] Cambios visuales revisados en móvil y en modo oscuro.
- [ ] Sin datos sensibles (claves, tokens, contraseñas) en el código.

## Calidad de código

- `npm run lint` debe terminar con 0 errores y 0 avisos.
- `npm run format` aplica Prettier con la configuración de `.prettierrc.cjs`.
- Los componentes declaran sus props con `PropTypes`.
- Textos, enlaces y datos de contacto del sitio viven en `src/config/`, no repartidos por los componentes.
- Las imágenes propias van en `public/` o `src/assets/`, optimizadas (WebP, menos de 200 kB).

## Configuración recomendada en GitHub

Para que estas reglas se cumplan solas, en *Settings → Branches* conviene proteger `main`:

- Requerir pull request antes de fusionar.
- Requerir que pasen los checks `lint-build` y `pr-title`.
- Permitir solo *Merge commits* y borrar ramas automáticamente al fusionar.
