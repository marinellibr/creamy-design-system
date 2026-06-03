/**
 * Webpack customizado do creamy-design-system.
 *
 * Problema: o design system consome o `creamy-kit` via symlink em
 * `node_modules` (necessário para deduplicar o Angular com `preserveSymlinks`).
 * Por padrão o webpack trata TODO o conteúdo de `node_modules` como imutável
 * (`snapshot.managedPaths`) e o cacheia — por isso, ao rebuildar o kit, o
 * dev server continuava servindo a versão antiga.
 *
 * Solução: remover o `creamy-kit` dos `managedPaths` para que o webpack o trate
 * como código mutável (observado em watch e invalidado no cache quando muda).
 */
module.exports = (config) => {
  // Mantém node_modules como "managed" (imutável), EXCETO o creamy-kit.
  config.snapshot = {
    ...config.snapshot,
    managedPaths: [
      /^(.+?[\\/]node_modules[\\/])(?!creamy-kit(?:[\\/]|$))/,
    ],
  };

  // Segue o symlink do kit e não o ignora no watch.
  // `aggregateTimeout` alto dá tempo do `build:kit` terminar de escrever todo
  // o dist antes do webpack reagir, evitando leitura no meio da escrita.
  config.watchOptions = {
    ...config.watchOptions,
    followSymlinks: true,
    aggregateTimeout: 1000,
  };

  return config;
};
