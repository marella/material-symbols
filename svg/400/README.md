# [@material-symbols/svg-400](https://github.com/marella/material-symbols/tree/main/svg/400)

Latest optimized SVGs with weight 400 for Material Symbols.

> This package is automatically updated, so it will always have the latest icons from Google.

> For variable icon fonts, see [`@material-symbols/font-400`](https://www.npmjs.com/package/@material-symbols/font-400)

- [Installation](#installation)
- [Usage](#usage)
- [Available Icons](#available-icons)

## Installation

Install the [latest version][releases] using:

```sh
npm install @material-symbols/svg-400@latest
```

The package `@material-symbols/svg-400` includes only SVGs with weight 400. To use a different weight, replace `400` in the package name with the desired weight.

<details>
<summary><strong>Show all packages</strong></summary><br>

| Package                                                                                | Weight |
| :------------------------------------------------------------------------------------- | :----- |
| [`@material-symbols/svg-100`](https://www.npmjs.com/package/@material-symbols/svg-100) | 100    |
| [`@material-symbols/svg-200`](https://www.npmjs.com/package/@material-symbols/svg-200) | 200    |
| [`@material-symbols/svg-300`](https://www.npmjs.com/package/@material-symbols/svg-300) | 300    |
| [`@material-symbols/svg-400`](https://www.npmjs.com/package/@material-symbols/svg-400) | 400    |
| [`@material-symbols/svg-500`](https://www.npmjs.com/package/@material-symbols/svg-500) | 500    |
| [`@material-symbols/svg-600`](https://www.npmjs.com/package/@material-symbols/svg-600) | 600    |
| [`@material-symbols/svg-700`](https://www.npmjs.com/package/@material-symbols/svg-700) | 700    |

</details>

## Usage

Material Symbols are available in three styles&mdash;`outlined`, `rounded`, and `sharp`. SVGs are available for both unfilled (`FILL` 0) and filled (`FILL` 1) states with grade (`GRAD`) 0 and size (`opsz`) 48px. Other variations of grade and size are not included to keep the package size small. SVGs for each icon are located in the corresponding style directory:

```js
@material-symbols/svg-400/{style}/{icon}.svg      /* Fill 0 */
@material-symbols/svg-400/{style}/{icon}-fill.svg /* Fill 1 */
```

For example, SVGs for `face` icon are located at:

```js
@material-symbols/svg-400/outlined/face.svg      /* Fill 0 */
@material-symbols/svg-400/outlined/face-fill.svg /* Fill 1 */
@material-symbols/svg-400/rounded/face.svg       /* Fill 0 */
@material-symbols/svg-400/rounded/face-fill.svg  /* Fill 1 */
@material-symbols/svg-400/sharp/face.svg         /* Fill 0 */
@material-symbols/svg-400/sharp/face-fill.svg    /* Fill 1 */
```

### React

You can use [`@svgr/webpack`](https://www.npmjs.com/package/@svgr/webpack) to import SVGs as React components:

```js
import Face from '@material-symbols/svg-400/outlined/face.svg';

// Face is a React component that renders the SVG

function App() {
  return (
    <div className="App">
      <Face />
    </div>
  );
}
```

If you are using `@svgr/webpack` with `file-loader` (example: [Create React App](https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs)), use:

```js
import { ReactComponent as Face } from '@material-symbols/svg-400/outlined/face.svg';
```

### Vue

You can use [`@svgv/webpack`](https://www.npmjs.com/package/@svgv/webpack) to import SVGs as Vue components:

```html
<template>
  <div class="App">
    <Face />
  </div>
</template>

<script>
import Face from '@material-symbols/svg-400/outlined/face.svg';

// Face is a Vue component that renders the SVG

export default {
  components: {
    Face,
  },
};
</script>
```

### Styling

SVGs can be styled using CSS. Setting `width` and `height` to `1em` allows changing size via `font-size`. Setting `fill` to `currentColor` allows changing color via `color`.

```css
.App svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
```

## Available Icons

See [demo].

## License

Material Symbols are created by [Google](https://github.com/google/material-design-icons#license).

> We have made these icons available for you to incorporate into your products under the [Apache License Version 2.0][license]. Feel free to remix and re-share these icons and documentation in your products.
We'd love attribution in your app's *about* screen, but it's not required.

[releases]: https://github.com/marella/material-symbols/releases
[license]: https://github.com/marella/material-symbols/blob/main/svg/400/LICENSE
[demo]: https://marella.github.io/material-symbols/demo/
