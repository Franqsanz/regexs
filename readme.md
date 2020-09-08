[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# Regexs

Es un Paquete NPM de Expresiones Regulares, que construí con el objetivo de uso personal, pero cualquiera puede utilizarlo.

Voy a ir recopilando Expresiones Regulares con el tiempo.

Si te gustaría contribuir para agregar algunas más, puedes hacer un PR. en [GitHub](https://github.com/Franqsanz/regexs). :)

## Modo de uso

#### Instalación

```sh
$ npm install regexs
```

#### ¿Como utilizar este paquete?

```js
const regexs = require('regexs');

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
