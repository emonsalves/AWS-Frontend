---
name: nuevo-componente
description: Crea un componente React nuevo siguiendo las convenciones del repo (ubicación por feature, PropTypes, tema con dark:, componentes base). Úsalo cuando se pida un componente, sección o bloque de UI nuevo.
---

# Crear un componente nuevo

## 1. Decide dónde va

Según `docs/ARQUITECTURA.md`:

| Si el componente... | Va en |
| --- | --- |
| Es reutilizable y no conoce el negocio (botón, tarjeta, modal) | `src/components/ui/` |
| Es estructura común (cabecera, pie, layout) | `src/components/layout/` |
| Pertenece a una sección del sitio (contacto, nosotros...) | `src/features/<feature>/components/` |

Si creas un feature nuevo, añade `src/features/<feature>/index.js` y exporta desde ahí lo que usen las páginas.
Un feature no importa otro feature.

## 2. Antes de escribir

- Revisa `src/components/base/` (`Button`, `Card`, `Input`, `Container`): compón con ellos en vez de repetir clases.
- Textos fijos, contacto o enlaces: léelos de `src/config/site.js` o añádelos ahí.

## 3. Plantilla

```jsx
import PropTypes from "prop-types";

const NombreComponente = ({ titulo, children }) => {
    return (
        <section className="rounded-2xl bg-white p-6 text-gray-900 dark:bg-gray-800 dark:text-white">
            <h2 className="text-xl font-semibold">{titulo}</h2>
            {children}
        </section>
    );
};

NombreComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default NombreComponente;
```

Reglas:

- Archivo `PascalCase.jsx`, un componente por archivo, export por defecto.
- Tema solo con clases `dark:` o `useTheme`; nunca `darkMode ? ... : ...`.
- Mobile first: clases base para 360 px y `sm:`/`md:`/`lg:` para crecer.
- Accesible desde el inicio: `button` para acciones, `Link` para navegar, `label` en campos, `alt` en imágenes,
  `aria-hidden="true"` en iconos decorativos.
- Textos visibles en español.

## 4. Verifica

1. `npm run lint` sin errores ni avisos.
2. `npm run build` correcto.
3. Si es visible, pide al subagente `revisor-accesibilidad` que lo audite.
