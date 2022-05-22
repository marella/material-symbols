import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

export const buildPackage = async () => {
  const rootDir = path.resolve('..');
  const { version } = JSON.parse(
    await readFile(path.resolve(rootDir, 'material-symbols', 'package.json'))
  );
  const dir = path.resolve(rootDir, 'svg');
  const templateDir = path.resolve(dir, '_template');
  const files = await readdir(templateDir, { withFileTypes: true });
  for (const file of files) {
    if (!file.isFile() || !isAlphaNumeric(file.name[0])) {
      continue;
    }
    const templateFile = path.resolve(templateDir, file.name);
    const template = await readFile(templateFile, 'utf8');
    for (const weight of [100, 200, 300, 400, 500, 600, 700]) {
      const packageFile = path.resolve(dir, weight.toString(), file.name);
      const content = getContent(template, { weight, version });
      await writeFile(packageFile, content);
    }
  }
};

const getContent = (template, vars) => {
  for (const [name, value] of Object.entries(vars)) {
    template = template.replaceAll(`{{${name}}}`, value);
  }
  return template;
};

const isAlphaNumeric = (s) => s.match(/[a-z0-9]/i);

await buildPackage();
