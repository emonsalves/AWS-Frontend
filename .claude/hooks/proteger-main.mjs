// PreToolUse: impide que Claude haga push a main, que se despliega directo a producción.
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const entrada = JSON.parse(readFileSync(0, "utf8"));
const comando = entrada.tool_input?.command ?? "";

if (/\bgit\s+push\b/.test(comando)) {
    let ramaActual = "";
    try {
        ramaActual = execSync("git branch --show-current", { encoding: "utf8" }).trim();
    } catch {
        // Fuera de un repositorio git no hay nada que proteger.
    }
    const apuntaAMain = /(\s|:|\/)main(\s|$)/.test(comando);
    // Desde main, "git push", "git push origin" o "git push origin HEAD" también suben main.
    const pushDesdeMain = ramaActual === "main" && /\bgit\s+push(\s+-\S+)*(\s+\w+)?(\s+HEAD)?\s*($|&&|;|\|)/.test(comando);

    if (apuntaAMain || pushDesdeMain) {
        console.error("Bloqueado: main se publica en www.mnslvs.com. Sube una rama y abre un pull request (ver CONTRIBUTING.md).");
        process.exit(2);
    }
}
