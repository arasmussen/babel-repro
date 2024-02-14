Repro steps:
- clone the repo
- npm install
- npm run build

Expected behavior:
- code compiles with no issue
  - using @babel/preset-env and shippedProposals: true so class properties should be loaded with no issue

Actual behavior:
```
ERROR in ./index.js 2:11
Module parse failed: Unexpected token (2:11)
File was processed with these loaders:
 * ./node_modules/babel-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
| class Foo {
>   property = true;
| }
```
