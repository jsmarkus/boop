# Boop

### HTML:

Add:

```html
<script src="boop.js"></script>
```

Use:

```html
<script>
    var Quux = Boop.extend({
        croak : function () {return 'a';}
    });
    (new Quux).croak(); //-> 'a'
</script>
```

### AMD(RequireJS):

Install:

```
volo add boop
```

Use:

```javascript
define(['boop'], function (Boop) {
    var Quux = Boop.extend({
        croak : function () {return 'a';}
    });
    (new Quux).croak(); //-> 'a'
});
```

### CommonJS(Node):

Install:

```
npm install boop
```

Use:

```javascript
var Boop = require('Boop');
var Quux = Boop.extend({
    croak : function () {return 'a';}
});
(new Quux).croak(); //-> 'a'
```