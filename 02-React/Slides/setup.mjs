#!/usr/bin/env zx

import fs from "fs/promises";
import path from "path";
// Note: This needs zx installed globally to work

const getDirectories = async (source) =>
  (await fs.readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const folders = await getDirectories(__dirname);

Promise.all(
  folders.map(async (folder) => {
    cd(folder);
    await $`npm install`;
    cd(__dirname);
  })
);
