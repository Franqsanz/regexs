[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()
![npm](https://img.shields.io/npm/v/regexs)
![npm](https://img.shields.io/npm/dt/regexs)

# Regexs

Es un paquete de Expresiones Regulares, que construí con el objetivo de uso personal, pero cualquiera puede utilizarlo.

Voy a ir recopilando Expresiones Regulares con el tiempo.

Si te gustaría contribuir para agregar algunas más, puedes hacer un PR. en [GitHub](https://github.com/Franqsanz/regexs). :)

## Instalación

```sh
$ npm install regexs
```

## Modo de uso

```js
const regexs = require('regexs');
// También pudes utilizar "Destructured Object"
const { numberCommas, rmAccents } = require('regexs');

// O con import
import regexs from 'regexs';
import { numberCommas, rmAccents } from 'regexs';

// Agregar comas a cifras numéricas.
// Por ejemplo:
const numero = numberCommas(50000);
console.log(numero); // 50,000

// Quitar acentos.
// Por ejemplo:
const acentos = rmAccents('perfección');
console.log(acentos); // perfeccion
```

#### Tipos de expresiones regulares disponibles:

| Tipos                  | Descripción                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `numberCommas()`       | Agregar comas a las cifras numéricas.                                              |
| `rmAccents()`          | Quitar acentos en los String.                                                      |
| `spaceScriptsMedium()` | Remplazar espacios por guiones medio.                                              |
| `spaceScriptsLow()`    | Remplazar espacios por guiones bajo.                                               |

## Licencia

[MIT](LICENSE)
