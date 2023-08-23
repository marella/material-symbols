import { readdir, rm } from "node:fs/promises";
import { WEIGHTS, distDir } from "../index.mjs";
import path from "node:path";

for (const weight of WEIGHTS) {
    const weightDir = path.resolve(distDir, weight.toString());
    const files = await readdir(weightDir, { withFileTypes: true });

    for (const file of files) {
        if(!(file.name == weight && file.isDirectory())) continue;

        const filePath = path.resolve(weightDir, file);

        await rm(filePath);
    }
}