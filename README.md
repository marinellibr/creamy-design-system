# Creamy Design System

Showcase e **documentação viva** do **Creamy Kit** — a biblioteca de
componentes Angular [`creamy-kit-angular`](https://github.com/marinellibr/creamy-kit-angular).

🔗 **Online:** https://marinellibr.github.io/creamy-design-system/

Cada componente tem sua própria rota (`/components/<slug>`), com uma navegação
lateral que lista todos eles. Os que ainda não têm página de demonstração
aparecem marcados com **WIP**.

> Projeto **apartado**: não é consumido pelo `creamy-shell` e não é um
> Micro-Frontend. Existe só para visualizar, testar e documentar o `creamy-kit`.

---

## Pré-requisito: a biblioteca

Este app consome o pacote `creamy-kit` a partir do build local do repo irmão
[`creamy-kit-angular`](https://github.com/marinellibr/creamy-kit-angular),
referenciado em `package.json` como:

```jsonc
"creamy-kit": "file:../creamy-kit-angular/dist/creamy-kit"
```

Portanto, clone os **dois** repositórios lado a lado:

```
.
├── creamy-kit-angular/      # a biblioteca
└── creamy-design-system/    # este projeto
```

---

## Rodar localmente

```bash
# 1) builda a biblioteca (no repo irmão)
cd ../creamy-kit-angular
npm install
npm run build                # → dist/creamy-kit

# 2) sobe o showcase
cd ../creamy-design-system
npm install
npm start                    # http://localhost:4203
```

### Atualizar o kit em tempo de desenvolvimento

Com o `npm start` rodando, rebuilde o kit em **outro terminal** que o dev
server detecta e recompila automaticamente:

```bash
cd ../creamy-kit-angular && npm run build
```

> ⚠️ Use o build pontual (`npm run build`), **não** `ng build --watch` do kit
> junto do dev server: o watch do ng-packagr reescreve o `dist`
> continuamente e, no meio da escrita, o pacote fica irresolvível, quebrando a
> compilação. O `webpack.config.js` deste projeto já remove o `creamy-kit` dos
> `managedPaths` do webpack para que mudanças no `dist` sejam observadas.

---

## Estrutura

```
src/app/
├── showcase/
│   ├── component-registry.ts        # fonte única: slug, label, grupo, WIP
│   ├── layout/                      # sidebar + <router-outlet>
│   ├── shared/                      # page-header, code-block
│   ├── pages/<componente>/          # uma página por componente
│   └── showcase.routes.ts           # rotas geradas a partir do registry
└── app.routes.ts
```

Para adicionar/promover um componente: edite `component-registry.ts` (tire o
`wip: true`), crie a página em `showcase/pages/<slug>/` e registre o
`loadComponent` em `showcase.routes.ts`.

---

## Deploy (GitHub Pages)

Automático via **GitHub Actions** (`.github/workflows/deploy.yml`) a cada push
na `main`. O job:

1. faz checkout deste repo **e** do `creamy-kit-angular` (mesmo owner);
2. builda a biblioteca e depois o site, com `--base-href` = `/<repo>/`;
3. gera `404.html` (fallback de SPA) e publica no Pages.

Pré-requisitos no GitHub:

- **Settings → Pages → Source = GitHub Actions**.
- O repo da lib `creamy-kit-angular` precisa ser acessível pelo job. Se for
  **privado**, gere um PAT, salve como secret `LIB_REPO_TOKEN` e descomente a
  linha `token:` no workflow.

Build de produção local (igual ao CI):

```bash
npm run build -- --base-href "/creamy-design-system/"
```

---

## Repositórios relacionados

- [`creamy-kit-angular`](https://github.com/marinellibr/creamy-kit-angular) — a biblioteca de componentes.
- [`creamy-kit-resources`](https://github.com/marinellibr/creamy-kit-resources) — ícones e assets (SVG).
