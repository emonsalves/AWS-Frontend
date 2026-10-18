// PreToolUse: impide que Claude haga push a main, que se despliega directo a producción.
// Es una salvaguarda local; la protección real es la regla de rama de main en GitHub.
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const entrada = JSON.parse(readFileSync(0, "utf8"));
const comando = entrada.tool_input?.command ?? "";

const ramaActual = () => {
    try {
        return execSync("git branch --show-current", { encoding: "utf8" }).trim();
    } catch {
        return "";
    }
};

// Rama de destino de un refspec: "+HEAD:refs/heads/main" → "main".
const destino = (refspec, rama) => {
    let ref = refspec.replace(/^\+/, "").replace(/^["']|["']$/g, "");
    if (ref.includes(":")) ref = ref.slice(ref.lastIndexOf(":") + 1);
    ref = ref.replace(/^refs\/heads\//, "");
    return ref === "HEAD" || ref === "@" ? rama() : ref;
};

const subeMain = (segmento) => {
    const partes = segmento.trim().split(/\s+/);
    const iGit = partes.findIndex((p) => /(^|\/)git$/.test(p));
    const iPush = partes.indexOf("push", iGit + 1);
    if (iGit === -1 || iPush === -1) return false;

    const args = partes.slice(iPush + 1);
    if (args.some((a) => /^--(all|mirror|branches)\b/.test(a))) return true;

    const [, ...refspecs] = args.filter((a) => !a.startsWith("-"));
    if (refspecs.length === 0) return ramaActual() === "main";
    return refspecs.some((r) => destino(r, ramaActual) === "main");
};

// Revisa cada comando de la línea por separado (;, &&, ||, |, saltos de línea).
if (comando.split(/;|&&|\|\||\||\n/).some(subeMain)) {
    console.error("Bloqueado: main se publica en www.mnslvs.com. Sube una rama y abre un pull request (ver CONTRIBUTING.md).");
    process.exit(2);
}
