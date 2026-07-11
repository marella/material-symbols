import { readdir } from "node:fs/promises";
import { WEIGHTS, distDir, STYLES } from "../index.mjs";
import path from "node:path";
import { rmdir } from "fs/promises";

for (const weight of WEIGHTS) {
    const weightDir = path.resolve(distDir, weight.toString());
    const files = await readdir(weightDir, { withFileTypes: true });

    for (const file of files) {
        if(file.isDirectory() && STYLES.includes(file.name)) {
            const filePath = path.resolve(weightDir, file.name);

            console.log(`Removing ${filePath}`);

            await rmdir(filePath, { recursive: true });
        }
    }
}