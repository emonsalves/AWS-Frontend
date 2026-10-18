// PostToolUse: aplica Prettier al archivo que Claude acaba de editar o crear.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const entrada = JSON.parse(readFileSync(0, "utf8"));
const archivo = entrada.tool_input?.file_path ?? "";
const prettier = join(process.env.CLAUDE_PROJECT_DIR ?? process.cwd(), "node_modules", ".bin", "prettier");

if (/\.(js|jsx|css)$/.test(archivo) && archivo.includes("/src/") && existsSync(prettier) && existsSync(archivo)) {
    try {
        execFileSync(prettier, ["--write", archivo], { stdio: "ignore", shell: process.platform === "win32" });
    } catch {
        // Si Prettier falla (sintaxis a medio escribir), no bloquea la edición; el lint lo detectará.
    }
}
