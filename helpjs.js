"use strict";
var HelpJS = {
    array: {
        select: function (array, action) {
            var result = [];
            for (var i = 0, length = array.length; i < length; i++) {
                result.push(action(array[i]));
            }
            return result;
        },
        selectBool: function (array, action) {
            var result = [];
            for (var i = 0, length = array.length; i < length; i++) {
                if(action(array[i])){
                    result.push(array[i]);
                }
            }
            return result;
        },
        sum: function (array, action) {
            var sum = 0;
            for (var i = 0, length = array.length; i < length; i++) {
                sum += action(array[i]);
            }
            return sum;
        },

        clear: function (array) {
            while (array.length) {
                array.pop();
            }
        },

        limit: function (array, limit) {
            var result = [];
            for (var i = 0, length = array.length; i < limit && i < length; i++) {
                result.push(array[i]);
            }
            return array2;
        }
    },
    number: {
        pad: function (str, max) {
            str = str.toString();
            return str.length < max ? this.pad("0" + str, max) : str;
        }
    },
    string: {
        replaceAll: function (str, find, replace) {
            return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
        }
    }
};