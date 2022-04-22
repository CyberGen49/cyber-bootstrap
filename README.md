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

My domain is effectively an alias of the default GitHub Pages URL, but if you don't trust me to keep it working, replace `bootstrap.simplecyber.org` with `github.com/CyberGen49/cyber-bootstrap`.

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

### Form elements
A big part of CyberBootstrap is its custom form elements.

In addition to styling the input elements themselves, `<form>` elements have a small bottom padding to help with separation.

Learn more about HTML forms on [MDN's web forms guide](https://developer.mozilla.org/en-US/docs/Learn/Forms).

#### Buttons
Buttons are the simplest form element, and require no extra classes for their styling:
```html
<button>This is a button</button>
```
The `small` or `large` classes can be added to buttons to make them small or large, respectively. Keep in mind that making buttons smaller could make them less convenient for mobile users to tap.

Add the `alt` class to a button to give it a less bright colour. This is good for non-default options in a dialog box, for example.

Add the `outline` class to a button to give it an outlined appearance instead of filled. The button will become filled when hovered over or focused.

If you want a button without CyberBootstrap's styling, give it the `noStyle` class. This will also remove the browser's default styling, making the button similar to a regular `div`.

#### Text boxes
A simple text box can be created like so:
```html
<input type="text" class="textbox" value="This is a single-line textbox">
```

This `textbox` class applies to all text-based input `type`s, along with `<textarea>` elements.

Like buttons, you can add the `small` or `large` classes to textboxes to make them small or large.

#### Date inputs
While date input types like `datetime-local` can be used just like normal textboxes, they need to be wrapped to customize the icon displayed on their right side. Add the wrapper element like so:
```html
<label>This is a date selector</label>
<div class="textboxWrapper date">
    <input type="datetime-local" class="textbox">
</div>
```

#### Dropdown menus
CyberBootstrap adds its own completely custom dropdown menus, but they still use default `<select>` and `<option>` elements. Create a select menu like so:
```html
<div class="textboxWrapper dropdown">
    <select class="textbox">
        <option selected disabled>This is a dropdown menu</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
    </select>
</div>
```

#### Radio buttons and checkboxes
To create radio buttons using CyberBootstrap's custom styling, you should wrap the input element and its label together inside of a `<label>` element with the `selectOption` class:
```html
<label class="selectOption">
    <input type="radio" name="singleSelect" checked>
    Single option 1
</label>
<label class="selectOption">
    <input type="radio" name="singleSelect">
    Single option 2
</label>
<label class="selectOption">
    <input type="radio" name="singleSelect">
    Single option 3
</label>
```

The same system applies to checkboxes. We'll just change our `type` from `radio` to `checkbox`:
```html
<label class="selectOption">
    <input type="checkbox" name="multiSelect" checked>
    Multi option 1
</label>
<!-- More options would follow -->
```

**Note:** Ensure that each set of options (`radio` or `checkbox`) has a matching `name` attribute.

To add more elements to the label of a radio button or checkbox - like a description, for example - be sure to wrap all of the label's contents in a `<div>` like so:
```html
<label class="selectOption">
    <input type="radio" name="singleSelect" checked>
    <div>
        <p>Single option 1</p>
        <small>This option also has a description!</small>
    </div>
</label>
```

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

#### `_id(id, ancestor):HTMLElement`
A shorthand function for `*.getElementById()` - returns an HTML element object
* `id`: The ID of the target element
* `ancestor`: An HTML element object to serve as the root for `getElementById()` (takes the place of the `*` above) - defaults to `document`

#### `_class(id, ancestor):HTMLCollection`
A shorthand function for `*.getElementsByClassName()` - returns an HTML element object
* `id`: The class name of the target elements
* `ancestor`: An HTML element object to serve as the root for `getElementsByClassName()` (takes the place of the `*` above) - defaults to `document`

#### `_tag(tag, ancestor):HTMLCollection`
A shorthand function for `*.getElementsByTagName()` - returns an HTML element object
* `id`: The tag name of the target elements
* `ancestor`: An HTML element object to serve as the root for `getElementsByTagName()` (takes the place of the `*` above) - defaults to `document`

#### `_qs(selector, ancestor):any`
A shorthand function for `*.querySelector()` - returns an HTML element object
* `selector`: The query selector for the target element
* `ancestor`: An HTML element object to serve as the root for `querySelector()` (takes the place of the `*` above) - defaults to `document`

#### `_qsa(selector, ancestor):any`
A shorthand function for `*.querySelectorAll()` - returns an HTML element object
* `selector`: The query selector for the target elements
* `ancestor`: An HTML element object to serve as the root for `querySelectorAll()` (takes the place of the `*` above) - defaults to `document`

#### `randomHex(length):string`
Returns a randomly generated hexadecimal string
* `length`: The length to make the resulting string

#### `clamp(num, min, max):number`
Ensures that a number stays between a minimum and maximum
* `num`: The number to check
* `min`: The minimum value to return
* `max`: The maximum value to return

### Popups
CyberBootstrap makes it easy to display popup modals with Javascript:

```js
showPopup(title, html, allowClose, onClose);
```

* `title`: Text to show as the title for the popup (should be short)
* `html`: Any HTML to put inside the popup, which can include complex elements like images or forms, or just text.
* `allowClose`: If `false`, the close button will be hidden and the user won't be able to click outside of the popup to close it. In this case, a button should have a registered click event that closes the popup (detailed below).

Returns an ID string that can be used to close the popup.

#### Closing the popup
By default, the user can click outside of the popup or use its close button to close it, unless `allowClose` is set to `false`.

The `hidePopup()` function can be called manually to hide the popup on demand, but is also used to handle the default close actions. When the popup is closed, it emits a `close` event that can be listened for.

#### Example popup usage

```javascript
// Show the popup with allowClose set to false
let popupId = showPopup('Test popup', `
    <p>It works!</p>
    <button id="testPopupDone">Close popup</button>
`, false);
// Close the popup when the button is clicked
_id('testPopupDone').addEventListener('click', () => {
    hidePopup(popupId);
});
// Listen for the popup's close event
_id(popupId).addEventListener('close', () => {
    console.log(`Popup closed!`);
});

// Alternatively, don't pass false to showPopup() and just use the
// popup's dedicated close button
```

## Browser support
CyberBootstrap is intended to work on all modern browsers, including all Chromium-based browsers (Chrome, Edge, etc.) and Firefox.

Internet Explorer **is not** supported (and shouldn't be used for security reasons).