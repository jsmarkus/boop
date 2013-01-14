(function(root, factory) {
    if(typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if(typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function() {
            return(root.Boop = factory());
        });
    } else {
        // Browser globals
        root.Boop = factory();
    }
}(this, function() {

    function _extend(obj) {
        var args = Array.prototype.slice.call(arguments);
        for(var i = 0; i < args.length; i++) {
            var source = args[i];
            if(source) {
                for(var prop in source) {
                    obj[prop] = source[prop];
                }
            }
        }
        return obj;
    }

    function _has(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }

    function Boop() {
        if('function' === typeof this.initialize) {
            this.initialize.apply(this, arguments);
        }
    }


    function extend(protoProps, staticProps) {
        var parent = this;
        var child;

        if(protoProps && _has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function() {
                parent.apply(this, arguments);
            };
        }

        _extend(child, parent, staticProps);

        var Surrogate = function() {
                this.constructor = child;
            };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();

        if(protoProps) _extend(child.prototype, protoProps);

        child.__super__ = parent.prototype;

        return child;
    }

    function mixin(mxn) {
        _extend(this.prototype, mxn);
        return this;
    }

    Boop.extend = extend;
    Boop.mixin = mixin;

    return Boop;
}));