---
name: nueva-pagina
description: Añade una página o ruta nueva al sitio (archivo en pages, ruta con carga diferida en el router, enlace en el menú y datos en config). Úsalo cuando se pida una página, sección con URL propia o ruta.
model: sonnet
---

# Añadir una página nueva

1. **Página** en `src/pages/<Nombre>Page.jsx` (o `<Nombre>.jsx` para seguir las existentes). La página solo compone
   features y componentes de layout; la lógica va en `src/features/<feature>/`.
   - Un único `h1` por página.
   - Sin retrasos artificiales ni `setTimeout` para mostrar contenido.

2. **Ruta** en `src/routes/router.jsx`:

   ```jsx
   const Servicios = lazyPage(() => import("../pages/Servicios"));
   // ...dentro de children:
   {
       path: "servicios",
       element: <SuspenseRouter element={<Servicios />} />,
   },
   ```

   - Usa siempre `lazyPage`, que recarga una vez si el chunk ya no existe tras un despliegue.
   - URL en minúsculas y en español (`/servicios`, `/nosotros`). Las rutas antiguas con mayúsculas
     (`About`, `Contacto`...) no se renombran sin redirección.
   - El router es `createHashRouter`: las URL públicas quedan como `https://www.mnslvs.com/#/servicios`.

3. **Menú**: si debe aparecer en la navegación, añádela donde se definan los enlaces (hoy
   `src/components/layout/NavbarPublic.jsx`; el objetivo es moverlos a `src/config/`). Usa `NavLink`.

4. **Título**: el sitio aún no cambia los metadatos por página (`index.html` tiene un título y una descripción
   fijos). Si la página necesita título propio, guárdalo en `src/config/site.js` y aplícalo con
   `useEffect(() => { document.title = ... }, [])` en la página; comprueba que cambia al navegar y al recargar.

5. **Verifica**: `npm run lint`, `npm run build` y `npm run preview`; navega a la ruta, recarga la página y prueba
   que el enlace del menú la marca como activa. Comprueba móvil y modo oscuro.
