/**
 * Indicador de carga mientras se descarga una página: una barra fina con el verde de la marca en el borde
 * superior. No tapa la página y solo aparece si la carga tarda (retraso de la animación en index.css).
 */
const LoaderPage = () => (
    <div role="status" aria-live="polite" className="loader-bar fixed inset-x-0 top-0 z-50 h-[3px] overflow-hidden">
        <span className="sr-only">Cargando…</span>
    </div>
);

export default LoaderPage;
