(function(global, factory) {

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else {
        global.NumberFormat = factory();
    }

})(this, function() {
    'use strict';

    // {{code}}
    return NumberFormat;

});