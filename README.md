# Creamy Design System

Projeto **apartado** de documentação e demonstração do **Creamy Kit** (design system Angular).

> ⚠️ Este projeto **não** é consumido pelo `creamy-shell` e **não** é um Micro-Frontend.
> Ele existe apenas para visualizar, testar e documentar os componentes do `creamy-kit`.

## Rodar

A forma recomendada (na raiz de `creamy/`) builda o kit e sobe o design system:

```bash
npm run dev:ds
```

Disponível em: http://localhost:4203

Alternativa (assumindo o kit já buildado):

```bash
npm install
npm start
```

## Atualizar o kit em tempo de desenvolvimento

Com o `dev:ds` rodando, basta rebuildar o kit em **outro terminal** que o dev
server detecta e **recompila automaticamente** (sem precisar reiniciar nem
limpar cache):

```bash
# na raiz de creamy/
npm run build:kit
```

### Como isso funciona

O design system consome o `creamy-kit` via symlink em `node_modules`
(necessário para o `preserveSymlinks` deduplicar o Angular). Por padrão o
webpack trata **tudo** em `node_modules` como imutável (`snapshot.managedPaths`)
e cacheia — por isso, antes, rebuildar o kit não refletia aqui.

O `webpack.config.js` deste projeto remove o `creamy-kit` dos `managedPaths`,
fazendo o webpack tratá-lo como código mutável (observado em watch e invalidado
no cache quando muda).

> ⚠️ Use sempre `build:kit` (build pontual), **não** `ng build --watch` do kit
> junto do dev server: o watch do ng-packagr reescreve o `dist`
> continuamente e, no meio da escrita, o pacote fica irresolvível, quebrando a
> compilação.
