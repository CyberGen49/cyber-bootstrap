# cyber-bootstrap
Boilerplate CSS and JavaScript for making good-looking websites.

## Installation
To start using CyberBootstrap, add this line to your HTML `<head>`:
```html
<link rel="stylesheet" href="https://bootstrap.simplecyber.org/cyber-bootstrap.css">
```
Then add this line to the bottom of your HTML `<body>`:
```html
<script src="https://bootstrap.simplecyber.org/cyber-bootstrap.js">
```

## Documentation
### CSS
CyberBootstrap's main purpose is to provide some base styling for you to either build off of or leave as-is. There are some customization options available (via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)) so you can adjust the design to your liking without writing tons of extra CSS.

To modify aspects of CyberBootstrap with your own CSS, be sure to link your own `.css` files (or `<style>` elements) **after** linking CyberBootstrap in your HTML `<head>`.

#### Fonts
CyberBootstrap includes 4 fonts, [Quicksand](https://fonts.google.com/specimen/Quicksand?query=quicksand) and [Sora](https://fonts.google.com/specimen/Sora?query=sora), which are used for headers and body text respectively, and [Google's Material Icons](https://fonts.google.com/icons) filled and outlined icon fonts, which are used for form inputs (but can also be used for all sorts of things).

You can change the header and body fonts by modifying the `--fontHeader` and `--fontBody` properties in your own CSS:

```css
:root {
    --fontHeader: "Quicksand";
    --fontBody: "Sora";
}
```

Note that, to use other fonts, you'll need to link them in your HTML or include them in your CSS separately. [Google Fonts](https://fonts.google.com/) is a good place to start.

You can also modify some other text properties like base font size and line height:

```css
:root {
    --fontSize: 15px;
    --lineHeight: 1.4;
}
```

#### Accent colour
Many CyberBootstrap elements make use of an accent colour, which can be customized to your liking. Do so by modifying the following properties in your own CSS:

```css
:root {
    --acc: #6cc9ff;
    --accL: #92d7ff;
    --accLL: #b1e2ff;
}
```

`--accL` and `--accLL` are lighter versions of the base accent colour (`--acc`), and are used for hovering and selecting elements. These should be adjusted for your new accent colour.

### Javascript
In addition to handling some of the custom form elements, CyberBootstrap Javascript comes with a handful of helpful functions to make your other scripts easier to write.

#### `_id(id, ancestor)`
A shorthand function for `*.getElementById()` - returns an HTML element object
* `id`: The ID of the target element
* `ancestor`: An HTML element object to serve as the root for `getElementById()` (takes the place of the `*` above) - defaults to `document`

#### `_class(id, ancestor)`
A shorthand function for `*.getElementsByClassName()` - returns an HTML element object
* `id`: The class name of the target elements
* `ancestor`: An HTML element object to serve as the root for `getElementsByClassName()` (takes the place of the `*` above) - defaults to `document`

#### `_qs(selector, ancestor)`
A shorthand function for `*.querySelector()` - returns an HTML element object
* `selector`: The query selector for the target element
* `ancestor`: An HTML element object to serve as the root for `querySelector()` (takes the place of the `*` above) - defaults to `document`

#### `_qsa(selector, ancestor)`
A shorthand function for `*.querySelectorAll()` - returns an HTML element object
* `selector`: The query selector for the target elements
* `ancestor`: An HTML element object to serve as the root for `querySelectorAll()` (takes the place of the `*` above) - defaults to `document`

### Popups
CyberBootstrap makes it easy to display popup modals programmatically:

```js
showPopup(title, html, allowClose);
```

* `title`: Text to show as the title for the popup (should be short)
* `html`: Any HTML to put inside the popup, which can include complex elements like images or forms, or just text.
* `allowClose`: If `false`, the close button will be hidden and the user won't be able to click outside of the popup to close it. In this case, a button should have a registered click event that closes the popup (detailed below).

#### Closing the popup
By default, the user can click outside of the popup or use its close button to close it, unless `allowClose` is set to `false`.

`showPopup()` will return the resulting popup's ID (`popup-<timestamp>`). Pass this ID to the `closePopup()` function to close it.

## Support
CyberBootstrap is intended to work on all modern browsers, including all Chromium-based browsers (Chrome, Edge, etc.) and Firefox.

Internet Explorer **is not** supported (and shouldn't be used).