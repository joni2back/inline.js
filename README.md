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
<!-- Add font-size of of 50px -->
<div class="fs50">hello!</div>
```
```html
<!-- Combine helpers -->
<div class="fs50 mt25 mb0 ml50 br30%">hello!</div>
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
