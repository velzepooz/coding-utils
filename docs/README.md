Documentation / [Modules](modules.md)

### Coding utils

![Documented](/docs/coverage.svg "Documented")
![Test Covered](/docs/testCoverage.svg "Test Covered")

Utils function for general coding tasks, like unique, capitalize, omit, etc.

## Scripts

1. `npm run fmt` - format with eslint
2. `npm run check` - runs typescript compiler to check project, no types emitted
3. `npm run lint` - eslint checks
4. `npm run test` - coverage with c8 and test
5. `npm run types` - compile d.ts files from javascript code using tsc
6. `npm run docs` - generate docs with typedoc
7. `npm run final` - run all scripts in sequence 1, 2, 3, 4, 5, 6 -> fmt, check, lint, test, types, docs
