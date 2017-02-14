# deproptypeify

[![Greenkeeper badge](https://badges.greenkeeper.io/yaycmyk/deproptypeify.svg)](https://greenkeeper.io/)

Searches for <componentName>.propTypes and removes the block, because ifdef is annoying.

## Install

```bash
npm install deproptypeify
```

## browserify

```bash
browserify your_file.js -t deproptypeify
```

### included files

If you wish to run deproptypeify on files with extensions other than `*.js *.jsx *.es6`, add `extension` options. The API mirrors how Browserify handles adding extra extensions:

_compile-to-js languages should be preprocessed before running through this transform, as it makes use of a JS AST parser_

via CLI
```bash
browserify your_file.js -t [ deproptypeify --extension html --extension haml ]
```

via JS
```js
.transform({ extensions: ['html', 'haml'] }, deproptypeify)
```

MIT License
