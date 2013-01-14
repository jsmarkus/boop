# Boop

Boop (**B**ackbone **OOP**) is standalone OOP library, based on one used in Backbone.

Boop may be used in different environments (browser, AMD, Node.js).

## Usage

```javascript
var Foo = Boop.extend({
    initialize : function () {
        //will be called as constructor
    },
    method1 : function () {
    },
    method2 : function () {
    }
}, {
    staticMethod1 : function () {
    },
    staticMethod2 : function () {
    }
});

var Event = {
    on : function () {
    },
    off : function () {
    },
    emit : function () {
    }
};

Foo.mixin(Event);

//call staic method
Foo.staticMethod1();

//create instance
var foo = new Foo;

//call prototype method
foo.method1();

//call mixin method
foo.emit();

//instanceof works
foo instanceof Foo;

//etc...
```

## Installation

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
var Boop = require('boop');
var Quux = Boop.extend({
    croak : function () {return 'a';}
});
(new Quux).croak(); //-> 'a'
```

## Testing

Clone this repo, then install `devDependencies`, then test with `mocha`:

```
git clone https://github.com/jsmarkus/boop.git
cd boop
npm install -d
make test
```