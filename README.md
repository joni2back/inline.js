# inline.js
CSS Helpers with Javascript
-------

Use inline css helpers in a fashion way

Some formulas:
```html
<!-- Add margin-top of 25px -->
<div class="mt25"></div>
```
```html
<!-- Add font-size of 14pt -->
<div class="fs14pt">hello!</div>
```
```html
<!-- Combine helpers -->
<div class="fs14pt mt25 mb0 ml2em br30%">hello!</div>
```

-------
```js
// use without jquery
var scope = window.document.getElementById('container');
window.inlinejs.apply(scope);

// with jquery
var scope = $('#container');
window.inlinejs.apply(scope);
```
