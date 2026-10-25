import { login } from "../../../config/login";

/** Vista previa decorativa del panel: barras que crecen y automatizaciones activas. */
const LoginPreview = () => {
    const { preview } = login;
    const highest = Math.max(...preview.bars);

    return (
        <div aria-hidden="true" className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
            <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{preview.period}</span>
                <span className="flex items-center gap-2 rounded-full bg-primary-500/15 px-3 py-1 text-xs font-semibold text-primary-400">
                    <span className="anim-ring h-1.5 w-1.5 rounded-full bg-primary-500" />
                    {preview.status}
                </span>
            </div>
            <div className="mt-5 grid h-24 grid-cols-7 items-end gap-2.5">
                {preview.bars.map((value, index) => (
                    <div key={index} className="flex h-full flex-col items-center justify-end gap-2">
                        <span
                            className={`anim-grow w-full rounded-md ${value === highest ? "bg-primary-500" : "bg-white/15"}`}
                            style={{ height: `${value}%`, "--delay": `${300 + index * 90}ms` }}
                        />
                        <span className="text-[11px] text-night-muted">{preview.days[index]}</span>
                    </div>
                ))}
            </div>
            <ul className="mt-4 flex flex-col gap-2">
                {preview.flows.map((flow, index) => (
                    <li
                        key={flow.name}
                        className="anim-rise flex items-center justify-between gap-3 rounded-xl bg-white/[0.04] px-4 py-2.5 text-sm"
                        style={{ "--delay": `${900 + index * 150}ms` }}
                    >
                        <span>{flow.name}</span>
                        <span className="flex shrink-0 items-center gap-1.5 text-xs text-primary-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                            {flow.state}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LoginPreview;
