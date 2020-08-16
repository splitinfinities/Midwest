// packages/ui/build/watch-dev.js

const colors = require('colors/safe');
const fs = require('fs');

const log = (message, ...args) =>
  console.log(colors.cyan(`\n${message}`), args.length > 0 ? args : '');

const setup = async () => {
  log('Running watch-mode => re-compiling "ui" on dependency changes');

  // Read Stencil config
  const stencilConfigPath = 'stencil.config.ts';
  let stencilConfigContent = '';
  await fs.readFile(stencilConfigPath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }

    log(`Read file ${stencilConfigPath} successfully`, data.length);

    stencilConfigContent = data;
  });

  const writeStencilConfig = (curr, prev) => {
    log(`${clientEntrance} file changed => updateing ${stencilConfigPath}`);

    log(`Writing Stencil config file`, stencilConfigContent);

    if (stencilConfigContent.length === 0) {
      return;
    }

    fs.writeFile(stencilConfigPath, stencilConfigContent, 'utf8', function(
      err
    ) {
      if (err) return console.log(err);
    });
  };

  // Setup listener for @case-os/client changes
  const clientEntrance = `../client/esm/index.js`;
  await fs.watchFile(clientEntrance, writeStencilConfig);
  // Setup listener for @case-os/client changes
  const uiKitEntrance = `../ui-kit/dist/index.js`;
  await fs.watchFile(uiKitEntrance, writeStencilConfig);
};

setup();