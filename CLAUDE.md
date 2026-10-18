# CLAUDE.md

Contexto para agentes de IA (Claude Code y compatibles) que trabajan en este repositorio.

## Qué es

Sitio web de MNSLVS Solutions (www.mnslvs.com): SPA de React 18 + Vite 6 + Tailwind 3, con rutas de React Router 6
(`createHashRouter`). No hay backend ni pruebas automáticas todavía.

**`main` es producción.** Cada push a `main` ejecuta `.github/workflows/deploy.yml` (build → `aws s3 sync` → invalidación
de CloudFront). Nunca hagas push a `main`, nunca toques `deploy.yml` ni secretos sin que se pida expresamente.

## Comandos

```bash
npm ci            # instalar
npm run dev       # desarrollo (http://localhost:3500)
npm run lint      # debe terminar con 0 errores y 0 avisos
npm run build     # build de producción en dist/
npm run format    # Prettier sobre src/
```

Antes de dar un cambio por terminado: `npm run lint` y `npm run build` en verde.

## Reglas (resumen; la fuente es la documentación enlazada)

- Flujo, ramas, commits y PR: @CONTRIBUTING.md
- Estructura de carpetas y dependencias entre capas: @docs/ARQUITECTURA.md
- Idioma: todo en español (textos del sitio, commits, PR, comentarios).
- Commits con Conventional Commits; título del PR con el mismo formato (la CI lo valida). Fusión con *Squash and merge*.
- Los commits van solo a nombre de Enzo Monsalves: sin trailers `Co-Authored-By` ni enlaces de sesión.
- Código nuevo en la estructura objetivo (`features/`, `components/ui`, `config/`...). No mezcles mover archivos con
  cambiar lógica.
- Tema: `useTheme` (`src/hooks/useTheme.js`) + clases `dark:`. Nada de `darkMode ? 'a' : 'b'` en componentes nuevos.
- Componentes con `PropTypes`. Reutiliza `src/components/ui` (`Button`, `Card`, `Input`, `Container`).
- Textos, contacto y redes en `src/config/site.js`, no repartidos por los componentes.
- Páginas nuevas con `lazyPage(() => import(...))` en `src/routes/router.jsx`.
- Accesibilidad: `<Link>`/`<NavLink>` para navegar, `label` en cada campo, foco visible.
- Sin dependencias nuevas sin justificarlo; sin `console.log` ni código comentado.

## Agentes y skills del repo

- Subagentes en `.claude/agents/`: `revisor-codigo`, `revisor-accesibilidad`, `analista-rendimiento`.
- Skills en `.claude/skills/`: `nuevo-componente`, `nueva-pagina`, `migrar-feature`, `preparar-pr`.
- Hooks en `.claude/settings.json`: formatean con Prettier tras cada edición y bloquean `git push` a `main`.
