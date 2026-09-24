import path from 'node:path';
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from 'node:fs';
import { distDir, rootDir, WEIGHTS } from "../index.mjs";

/**
 * Initiate packages for each weight
 * @returns {Promise<void>}
 */
const initPackages = async () => {
  const templateDir = path.resolve(rootDir, 'path', '_template');

  /**
   * Get the version of the root package
   * @returns {Promise<string>}
   */
  const getVersion = async () => {
    const rootPackagePath = path.resolve(rootDir, 'material-symbols', 'package.json');
    const packageContents = await readFile(rootPackagePath, 'utf8');
    const parsedPackage = JSON.parse(packageContents);

    return parsedPackage['version'];
  }

  for (const weight of WEIGHTS) {
    const distWeightDir = path.resolve(distDir, weight.toString());

    if (!existsSync(distWeightDir)) {
      await mkdir(distWeightDir);

      const templateFiles = await readdir(templateDir, { withFileTypes: true });

      for (const templateFile of templateFiles) {
        const templateFilePath = path.resolve(templateDir, templateFile.name);
        const templateFileContent = await readFile(templateFilePath, 'utf8');
        const distTemplateFilePath = path.resolve(distWeightDir, templateFile.name);
        const distTemplateFileContent = templateFileContent
          .replaceAll('{{weight}}', weight.toString())
          .replaceAll('{{version}}', await getVersion());

        await writeFile(distTemplateFilePath, distTemplateFileContent);
      }
    }
  }
}

await initPackages();