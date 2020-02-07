# `@helcor/window-sizes`

<a href="https://npmjs.org/package/@helcor/window-sizes">
  <img src="https://img.shields.io/npm/v/@helcor/window-sizes.svg" alt="version" />
</a>
<a href="https://npmjs.org/package/@helcor/window-sizes">
  <img src="https://img.shields.io/npm/dm/@helcor/window-sizes.svg" alt="downloads" />
</a>

Browser window dimensions and sizes manipulation.

## `getElementHeight`

Get an `HTMLElement` content height or a provided `window` body content height
in pixels.

### API

```js
import { getElementHeight } from '@helcor/window-sizes';
getElementHeight(element: HTMLElement | Window): number
```

### Examples

```js
// Get the window body content height.
const height = getElementHeight(window);

// Get an element content height.
const element = document.querySelector('#element-id');
const height = getElementHeight(element);
```

## `getViewportSize`

Get the browser viewport width and height in pixels.

### API

```js
import { getViewportSize } from '@helcor/window-sizes';
getViewportSize(
  { wMin, wMax, hMin, hMax }: { wMin: number, wMax: number, hMin: number, hMax: number } = {},
  defaultSize: { width: number, height: number }
): { width: number, height: number }
```

### Example

```js
// Get the raw browser viewport.
const { width, height } = getViewportSize();

// Get the raw browser viewport with minimum of 800x600 pixels.
const { width, height } = getViewportSize({ wMin: 800, hMin: 600 });
```
