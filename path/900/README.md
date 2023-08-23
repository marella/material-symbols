# [@material-symbols/path-900](https://github.com/marella/material-symbols/tree/main/svg/900)

Latest SVG path string exports with weight 900 for Material Symbols.

> This package is automatically updated, so it will always have the latest icons from Google.

> For variable icon fonts, see [`@material-symbols/font-900`](https://www.npmjs.com/package/@material-symbols/font-900)

- [Installation](#installation)
- [Usage](#usage)
- [Available Icons](#available-icons)

## Installation

Install the [latest version][releases] using:

```sh
npm install @material-symbols/path-900@latest
```

The package `@material-symbols/path-900` includes only path strings with weight 900. To use a different weight, replace `900` in the package name with the desired weight.

<details>
<summary><strong>Show all packages</strong></summary><br>

| Package                                                                                  | Weight |
|:-----------------------------------------------------------------------------------------| :----- |
| [`@material-symbols/path-100`](https://www.npmjs.com/package/@material-symbols/path-100) | 100    |
| [`@material-symbols/path-200`](https://www.npmjs.com/package/@material-symbols/path-200) | 200    |
| [`@material-symbols/path-300`](https://www.npmjs.com/package/@material-symbols/path-300) | 300    |
| [`@material-symbols/path-400`](https://www.npmjs.com/package/@material-symbols/path-400) | 400    |
| [`@material-symbols/path-500`](https://www.npmjs.com/package/@material-symbols/path-500) | 500    |
| [`@material-symbols/path-600`](https://www.npmjs.com/package/@material-symbols/path-600) | 600    |
| [`@material-symbols/path-700`](https://www.npmjs.com/package/@material-symbols/path-700) | 700    |

</details>

## Usage

Material Symbols are available in three styles&mdash;`outlined`, `rounded`, and `sharp`. Path strings are available for both unfilled (`FILL` 0) and filled (`FILL` 1) states with grade (`GRAD`) 0 and size (`opsz`) 48px. Other variations of grade and size are not included to keep the package size small. Exports are prefixed `ms` followed by a camelCase version of the corresponding SVG file name. If the icon is filled, "Filled" is appended to the export. Path strings for each icon are located in the corresponding style directory.

For example:

| Icon       | Style      | Fill | Export Name        | Import Path                                   |
|------------|------------|------|--------------------|-----------------------------------------------|
| `home`     | `outlined` | 0    | `msSearch`         | `@material-symbols/path-900/outlined/` |
| `search`   | `rounded`  | 0    | `msHome`           | `@material-symbols/path-900/rounded/`  |
| `favorite` | `sharp`    | 1    | `msFavoriteFilled` | `@material-symbols/path-900/sharp/`    |

The above translates to the following import statements:
```js
import { msHome } from '@material-symbols/path-900/outlined';
import { msSearch } from '@material-symbols/path-900/rounded';
import { msFavoriteFilled } from '@material-symbols/path-900/sharp';
```

### Example

*The following example uses React, but the concept applies anywhere ES modules are supported.*

```js
import { msHome } from '@material-symbols/path-900/outlined';

// msHome = "M220-180h150v-250h220v250h150v-3..."

function App() {
  return (
    <div className="App">
        <svg width="48" height="48" viewBox="0 -960 960 960">
            <path d={msHome} />
        </svg>
    </div>
  );
}
```

## Available Icons

See [demo].

## License

Material Symbols are created by [Google](https://github.com/google/material-design-icons#license).

> We have made these icons available for you to incorporate into your products under the [Apache License Version 2.0][license]. Feel free to remix and re-share these icons and documentation in your products.
We'd love attribution in your app's *about* screen, but it's not required.

[releases]: https://github.com/marella/material-symbols/releases
[license]: https://github.com/marella/material-symbols/blob/main/svg/900/LICENSE
[demo]: https://marella.github.io/material-symbols/demo/
