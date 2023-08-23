import path from "node:path";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { parse } from "svg-parser";
import { distDir, svgDir, WEIGHTS, STYLES } from "../index.mjs";

const EXPORT_PREFIX = 'ms';

/**
 * Generate a friendly export name for an icon
 * @param iconName
 * @returns {string}
 */
const getExportName = (iconName) => {
  let exportName = EXPORT_PREFIX;

  const filled = iconName.endsWith('-fill');
  const fillRemoved = iconName.replace('-fill', '');
  const nameParts = fillRemoved.split('_');

  for (const namePart of nameParts) {
    exportName += namePart.charAt(0).toUpperCase() + namePart.slice(1);
  }

  if (filled) {
    exportName += 'Filled';
  }

  return exportName;
}

/**
 * Get all children of an SVG element
 * @param svg
 * @returns {*[]}
 */
const getAllSvgChildren = (svg) => {
  const children = [];

  if (svg.children) {
    for (const child of svg.children) {
      children.push(child);
      children.push(...getAllSvgChildren(child));
    }
  }

  return children;
}

/**
 * Build the packages for each weight
 * @returns {Promise<void>}
 */
const buildPackages = async () => {
  for (const weight of WEIGHTS) {
    const weightDir = path.resolve(svgDir, weight.toString());
    const distWeightDir = path.resolve(distDir, weight.toString());

    for (const style of STYLES) {
      const styleDir = path.resolve(weightDir, style);
      const distStyleDir = path.resolve(distWeightDir, style);
      const indexFile = path.resolve(distStyleDir, 'index.js');
      const typesFile = path.resolve(distStyleDir, 'index.d.ts');
      let indexContent = '';
      let typesContent = '';

      if (!existsSync(distStyleDir)) {
        await mkdir(distStyleDir);
      }

      const files = await readdir(styleDir, { withFileTypes: true });
      const allSvgFiles = files.filter(file => file.isFile() && file.name.endsWith('.svg'));

      for (const svgFile of allSvgFiles) {
        const svgFileName = svgFile.name;
        const iconName = svgFileName.replace('.svg', '');
        const friendlyExportName = getExportName(iconName);
        const svgFilePath = path.resolve(styleDir, svgFileName);
        const svgFileContent = await readFile(svgFilePath, 'utf8');
        const parsedSvg = parse(svgFileContent);
        const svgChildren = getAllSvgChildren(parsedSvg);
        const pathElements = svgChildren.filter(child => child.tagName === 'path');
        const svgPath = pathElements[0].properties.d;

        indexContent += `export const ${friendlyExportName} = '${svgPath}';\n`;
        typesContent += `export const ${friendlyExportName}: string;\n`;
      }

      await writeFile(indexFile, indexContent.toString());
      await writeFile(typesFile, typesContent.toString());
    }
  }
}

await buildPackages();