'use strict';

// Shared configuration
const cfg = require('./config.json');

// Shared node modules
const amd = {
  fs: require('fs'),
  del: require('del'),
  path: require('path'),
  log: require('fancy-log'),
  rename: require('gulp-rename'),
  json2ts: require('json-schema-to-typescript'),
  argv: require('yargs').argv,
  git: require('gulp-git'),
  yaml: require('js-yaml'),
  eslint: require('gulp-eslint'),
  gulp: require('gulp'),
  ghPages: require('gh-pages'),
  hubRegistry: require('gulp-hub'),
  markdownlint: require('markdownlint'),
  gulpExec: require('gulp-exec'),
  gulpData: require('gulp-data'),
  gulpInstall: require('gulp-install'),
  gulpHelpDoc: require('gulp-help-doc'),
  jsonFormat: require('gulp-json-format'),
  jsonSchema: require('gulp-json-schema'),
  jsonSchemaBundle: require('gulp-jsonschema-bundle'),
  jsonSchemaValidator: require('jsonschema').Validator,
};

// Shared functions
const fnc = {
  readJson: (path) => JSON.parse(amd.fs.readFileSync(path)),
  readYaml: (path) => amd.yaml.safeLoad(amd.fs.readFileSync(path)),
  jsonToBuffer: (json) => Buffer.from(JSON.stringify(json), 'utf8'),
  nextRelease: () => typeof amd.argv.nextRelease !== 'undefined'
    ? amd.argv.nextRelease
    : cfg.meta.version,
  gitUserName: () => typeof amd.argv.gitUserName !== 'undefined'
    ? amd.argv.gitUserName
    : cfg.git.user.name,
  gitUserEmail: () => typeof amd.argv.gitUserEmail !== 'undefined'
    ? amd.argv.gitUserEmail
    : cfg.git.user.email,
  githubToken: () => typeof amd.argv.githubToken !== 'undefined'
    ? amd.argv.githubToken
    : '',
};

// Exported shared config, modules and functions
exports = module.exports = {
  cfg: cfg,
  amd: amd,
  fnc: fnc,
};
