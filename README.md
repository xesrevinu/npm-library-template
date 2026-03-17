# @xesrevinu/npm-library-template

Template repository for simple npm libraries built with Bun, tsdown, oxlint, oxfmt, lefthook, and Changesets.

## Highlights

- library-first setup for small npm packages with ESM output and declaration files
- Bun for dependency management and local commands, with `tsdown` handling bundling
- `oxlint` and `oxfmt` wired into `lefthook` so staged changes stay clean
- single-package Changesets release flow with npm provenance enabled by default
- README, scripts, and package metadata aligned with the shared repository standard

## Quick Start

Create a new repository from this template, then replace the package metadata in `package.json`:

- change `name`, `description`, `repository`, `bugs`, and `homepage`
- update `README.md` to describe the real package
- keep `packageManager`, `publishConfig`, and the shared quality scripts unless you have a good reason to diverge

Install dependencies and run the baseline checks:

```bash
bun install
bun run check
```

## Project Layout

```text
src/
  index.ts
tests/
  index.test.ts
  package-metadata.test.ts
```

The default template ships only a library entrypoint. `tsdown` produces `dist/index.js` and `dist/index.d.ts`.

## Development

Useful commands:

```bash
bun run dev
bun run test
bun run build
bun run pack:check
```

## Release

This repository uses Changesets plus the bundled GitHub Actions release workflow.

```bash
bun run changeset
bun run version-packages
bun run release
```

## Optional CLI Mode

If a package also needs a CLI, keep Node.js as the published runtime for the executable.

1. add `src/cli.ts` with a Node shebang such as `#!/usr/bin/env node`
2. extend `tsdown.config.ts` to build a `cli` entry
3. add a `bin` field in `package.json`
4. keep Bun for local development, but test the generated `dist/cli.js` with Node

## License

MIT
