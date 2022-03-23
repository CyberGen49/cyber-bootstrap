# cyber-bootstrap
Boilerplate CSS and JavaScript for making good-looking websites.  
[Read this document rendered with CyberBootstrap](https://bootstrap.simplecyber.org)

## Installation
To start using CyberBootstrap, add this line to your HTML `<head>`:

```html
<link rel="stylesheet" href="https://bootstrap.simplecyber.org/cyber-bootstrap.css">
```

Then add this line to the bottom of your HTML `<body>`:

```html
<script src="https://bootstrap.simplecyber.org/cyber-bootstrap.js">
```

Check out [the demo](demo/) for a demonstration of everything CyberBootstrap has to offer!

## Documentation
CyberBootstrap's main purpose is to provide some base styling for you to either build off of or leave as-is. There are some customization options available (via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)) so you can adjust the design to your liking without writing tons of extra CSS.

To modify aspects of CyberBootstrap with your own CSS, be sure to link any extra `.css` files (or `<style>` elements) **after** linking CyberBootstrap in your HTML `<head>`.

### Fonts
CyberBootstrap includes a handful of fonts:
* For headers: [Quicksand](https://fonts.google.com/specimen/Quicksand?query=quicksand)
* For body text: [Sora](https://fonts.google.com/specimen/Sora?query=sora)
* For code blocks: [Cascadia Code](https://github.com/microsoft/cascadia-code)
* For icons: [Google Material Icons](https://fonts.google.com/icons) (filled and outlined)

You can change these fonts by modifying the `--fontHeader` and `--fontBody` properties in your own CSS:

```css
:root {
    --fontHeader: "Quicksand";
    --fontBody: "Sora";
    --fontCode: "Cascadia Code";
}
```

To use other fonts, you'll need to link them in your HTML or include them in your CSS separately. [Google Fonts](https://fonts.google.com/) is a good place to start if you're looking for new fonts.

You can also modify some other text properties like base font size and line height:

```css
:root {
    --fontHeaderWeight: 550;
    --fontSize: 16px;
    --lineHeight: 1.5;
}
```

### Changing the accent colour
Many CyberBootstrap elements make use of an accent colour, which can be customized to your liking. Do so by modifying the following properties in your own CSS:

```css
:root {
    --acc: #6cc9ff;
    --accL: #92d7ff;
    --accLL: #b1e2ff;
}
```

`--accL` and `--accLL` are lighter versions of the base accent colour (`--acc`), and are used for hovering and selecting elements. These should be adjusted for your new accent colour.

### Code block syntax highlighting
Styling is included for highlighting the syntax of code inside of code blocks.

For a quick and easy setup, link CyberBootstrap's version of [PrismJS](https://prismjs.com/) (containing a handful of common languages) at the bottom of your HTML `<body>`, then call `Prism.highlightAll()` from your Javascript on page load:

```html
<script src="https://bootstrap.simplecyber.org/prism.js" data-manual>
```
```javascript
window.addEventListener('load', () => {
    Prism.highlightAll();
});
```

Then add language classes to your code blocks like so:
```html
<pre>
    <code class="language-javascript">console.log("It works!")</code>
</pre>
```

If you want to add more languages to Prism, head to [Prism's download customization page](https://prismjs.com/download.html). Note that you won't need to download any CSS from there, since CyberBootstrap covers it.

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

#### `_tag(tag, ancestor)`
A shorthand function for `*.getElementsByTagName()` - returns an HTML element object
* `id`: The tag name of the target elements
* `ancestor`: An HTML element object to serve as the root for `getElementsByTagName()` (takes the place of the `*` above) - defaults to `document`

#### `_qs(selector, ancestor)`
A shorthand function for `*.querySelector()` - returns an HTML element object
* `selector`: The query selector for the target element
* `ancestor`: An HTML element object to serve as the root for `querySelector()` (takes the place of the `*` above) - defaults to `document`

#### `_qsa(selector, ancestor)`
A shorthand function for `*.querySelectorAll()` - returns an HTML element object
* `selector`: The query selector for the target elements
* `ancestor`: An HTML element object to serve as the root for `querySelectorAll()` (takes the place of the `*` above) - defaults to `document`

#### `randomHex(length)`
Returns a randomly generated hexadecimal string
* `length`: The length to make the resulting string

#### `clamp(num, min, max)`
Ensures that a number stays between a minimum and maximum
* `num`: The number to check
* `min`: The minimum value to return
* `max`: The maximum value to return

### Popups
CyberBootstrap makes it easy to display popup modals with Javascript:

```js
showPopup(title, html, allowClose);
```

* `title`: Text to show as the title for the popup (should be short)
* `html`: Any HTML to put inside the popup, which can include complex elements like images or forms, or just text.
* `allowClose`: If `false`, the close button will be hidden and the user won't be able to click outside of the popup to close it. In this case, a button should have a registered click event that closes the popup (detailed below).

Returns an ID string that can be used to close the popup.

#### Closing the popup
By default, the user can click outside of the popup or use its close button to close it, unless `allowClose` is set to `false`.

You can use the `hidePopup()` function to close the popup like so:

```javascript
// Show the popup with allowClose set to false
let popupId = showPopup('Test popup', `
    <button id="testPopupDone">Close popup</button>
`, false);
// Close the popup when the button is clicked
_id('testPopupDone').addEventListener('click', () => {
    hidePopup(popupId);
});
```

## Browser support
CyberBootstrap is intended to work on all modern browsers, including all Chromium-based browsers (Chrome, Edge, etc.) and Firefox.

Internet Explorer **is not** supported (and shouldn't be used).