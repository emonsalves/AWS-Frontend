import { Icon } from "../../../components/ui";
import { home } from "../../../config/home";

/**
 * Conversación animada de la portada: llega un pedido por WhatsApp, se anota solo en la planilla
 * y el cliente recibe la confirmación. Las animaciones (.demo-step-*) están en index.css.
 */
const HeroDemo = () => {
    const { demo } = home.hero;

    return (
        <figure
            aria-label={demo.label}
            className="anim-rise relative rounded-3xl border border-paper-line bg-paper-soft p-5 shadow-custom-light sm:p-6 dark:border-night-line dark:bg-night-soft dark:shadow-custom-dark"
            style={{ "--delay": "350ms" }}
        >
            <figcaption className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-wide text-ink-muted dark:text-night-muted">
                <span aria-hidden="true" className="relative flex h-2 w-2">
                    <span className="anim-ring absolute inset-0 rounded-full" />
                    <span className="relative h-2 w-2 rounded-full bg-primary-500" />
                </span>
                {demo.label}
            </figcaption>

            <div className="demo-step-1 rounded-2xl border border-paper-line bg-paper p-4 dark:border-night-line dark:bg-night">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-primary-700 dark:text-primary-400">
                    <Icon name="whatsapp" />
                    {demo.chatName}
                </p>
                <p className="w-fit max-w-[90%] rounded-2xl rounded-tl-md bg-paper-soft px-3.5 py-2.5 text-[15px] text-ink dark:bg-night-soft dark:text-night-text">
                    {demo.incoming}
                </p>
            </div>

            <div aria-hidden="true" className="relative mx-auto my-2 h-6 w-px bg-paper-line dark:bg-night-line">
                <span className="anim-travel absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary-500" />
            </div>

            <div className="demo-step-2 overflow-hidden rounded-2xl border border-paper-line bg-paper dark:border-night-line dark:bg-night">
                <p className="border-b border-paper-line px-4 py-2.5 text-xs font-semibold text-ink-muted dark:border-night-line dark:text-night-muted">
                    {demo.sheetTitle}
                </p>
                <dl className="demo-step-3 grid grid-cols-3 gap-2 bg-paper-accent px-4 py-3 text-sm dark:bg-night-accent">
                    <div>
                        <dt className="sr-only">Cliente</dt>
                        <dd className="font-semibold text-ink dark:text-night-text">{demo.row.client}</dd>
                    </div>
                    <div>
                        <dt className="sr-only">Producto</dt>
                        <dd className="text-ink-muted dark:text-night-muted">{demo.row.item}</dd>
                    </div>
                    <div className="text-right">
                        <dt className="sr-only">Entrega</dt>
                        <dd className="font-semibold text-primary-700 dark:text-primary-400">{demo.row.date}</dd>
                    </div>
                </dl>
            </div>

            <div className="demo-step-4 mt-4 flex flex-col items-end gap-2">
                <p className="max-w-[90%] rounded-2xl rounded-tr-md bg-primary-500 px-3.5 py-2.5 text-[15px] font-medium text-primary-ink">
                    {demo.reply}
                </p>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-primary-700 dark:text-primary-400">
                    <Icon name="check" />
                    {demo.done}
                </p>
            </div>
        </figure>
    );
};

export default HeroDemo;
