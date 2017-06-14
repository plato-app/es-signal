"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signal = (function () {
    function Signal() {
        this.receivers = [];
    }
    Signal.prototype.receive = function (receiver) {
        this.receivers.push(receiver);
    };
    Signal.prototype.ignore = function (receiver) {
        var index = this.receivers.indexOf(receiver);
        if (index !== -1) {
            this.receivers.splice(index, 1);
        }
    };
    Signal.prototype.purge = function () {
        this.receivers.length = 0;
    };
    Signal.prototype.emit = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, _b = this.receivers; _a < _b.length; _a++) {
            var receiver = _b[_a];
            receiver.apply(void 0, args);
        }
    };
    return Signal;
}());
exports.Signal = Signal;
