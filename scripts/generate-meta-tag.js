#!/usr/bin/env node
/* Writes public/meta.json with the current package version.
 * Replaces react-cache-buster's generate-meta-tag helper. */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pkg = JSON.parse(
  fs.readFileSync(path.join(root, 'package.json'), 'utf-8'),
);

fs.writeFileSync(
  path.join(root, 'public', 'meta.json'),
  JSON.stringify({ version: pkg.version }),
);

console.log(`meta.json updated to version ${pkg.version}`);
