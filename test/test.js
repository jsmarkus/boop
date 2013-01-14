var assert = require('assert');
var Boop = require('../index');


describe('Boop', function() {

    describe('Base class', function() {
        it('shold be Boop class', function() {
            assert('function' === typeof Boop);
            assert('function' === typeof Boop.extend);
            assert('function' === typeof Boop.mixin);
        });
    });
    describe('.extend', function() {
        it('shold extend base class', function() {

            var Foo = Boop.extend({
                initialize: function() {
                    this.o = 'a';
                },
                croak: function() {
                    return 'eee';
                }
            });

            assert('function' === typeof Foo);
            assert('function' === typeof Foo.extend);
            assert('function' === typeof Foo.mixin);
            var foo = new Foo();
            assert(foo instanceof Boop);
            assert(foo instanceof Foo);
            assert(foo.o === 'a');
            assert(foo.croak() === 'eee');
        });
    });

    describe('.mixin', function() {

        var Foo = Boop.extend({
            initialize: function() {
                this.o = 'a';
            },
            croak: function() {
                return 'eee';
            }
        });

        var Bar = Foo.extend({
            z: function() {
                return 'y';
            }
        }).mixin({
            say: function() {
                return 'booo';
            }
        });

        var bar = new Bar();
        it('should add methods', function() {
            assert('function' === typeof Bar.prototype.say);
            assert('undefined' === typeof Foo.prototype.say);
            assert(bar.say() === 'booo');
        });
        it('should not break inheritance cain', function() {
            assert('function' === typeof Bar);
            assert('function' === typeof Bar.extend);
            assert('function' === typeof Bar.mixin);
            assert(bar.croak() === 'eee');
            assert(bar.z() === 'y');
        });

    });

});