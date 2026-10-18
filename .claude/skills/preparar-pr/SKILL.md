---
name: preparar-pr
description: Deja una rama lista para pull request según CONTRIBUTING.md (lint, build, commits convencionales, título y plantilla del PR). Úsalo cuando se pida abrir un PR, subir cambios o "dejarlo listo para fusionar".
---

# Preparar un pull request

Recuerda: fusionar en `main` publica el sitio en www.mnslvs.com. Nada entra sin CI en verde.

1. **Rama**: debe seguir `<tipo>/<descripcion-en-kebab-case>` (`feat/`, `fix/`, `perf/`, `refactor/`, `docs/`,
   `chore/`) y partir de `main` actualizado (`git fetch origin main`). Nunca trabajes ni hagas push en `main`.
2. **Calidad**:
   - `npm run lint` → 0 errores y 0 avisos.
   - `npm run build` → correcto.
   - Busca restos: `git diff origin/main...HEAD | grep -nE "console\.log|debugger"`.
3. **Revisión**: pide al subagente `revisor-codigo` que revise la rama; si hay cambios visibles, también a
   `revisor-accesibilidad`. Corrige lo bloqueante antes de seguir.
4. **Commits**: Conventional Commits en español, imperativo y minúsculas (`fix(navbar): cerrar menú con Escape`).
   Autor: Enzo Monsalves, sin trailers `Co-Authored-By` ni enlaces de sesión.
5. **Tamaño**: si el diff supera ~400 líneas (`git diff --stat origin/main...HEAD`), propone dividirlo.
6. **PR**:
   - Título con el mismo formato que un commit; la CI (`pr-title`) lo valida.
   - Cuerpo con la plantilla `.github/pull_request_template.md`: qué cambia, por qué, cómo probarlo, capturas si hay
     cambios visuales y el checklist marcado con lo que realmente se comprobó.
7. **Fusión**: la hace una persona, con *Squash and merge*, cuando `lint-build` y `pr-title` estén en verde.
