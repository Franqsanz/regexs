[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()
![npm](https://img.shields.io/npm/v/regexs)
![npm](https://img.shields.io/npm/dm/regexs)

# Regexs

Es un paquete NPM de Expresiones Regulares, que construí con el objetivo de uso personal, pero cualquiera puede utilizarlo.

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
const { RxNumberCommas, RxRmAccents } = require('regexs');

// O con import
import regexs from 'regexs';
import { RxNumberCommas, RxRmAccents } from 'regexs';

// Agregar comas a cifras numéricas.
// Por ejemplo:
const numero = regexs.RxNumberCommas(50000);
console.log(numero); // 50,000

// Quitar acentos.
// Por ejemplo:
const acentos = regexs.RxRmAccents('perfección');
console.log(acentos); // perfeccion
```

#### Tipos de expresiones regulares disponibles:

| Tipos              | Descripción                           |
| ------------------ | ------------------------------------- |
| `RxNumberCommas()` | Agregar comas a las cifras numéricas. |
| `RxRmAccents()`    | Quitar acentos en los String.         |

## Licencia

[MIT](LICENSE)
