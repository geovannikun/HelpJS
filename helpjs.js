HelpJS = {
    array: {
        select: function (array, action) {
            var array2 = new Array();
            for (var i = 0; i < array.length; i++) {
                array2.push(action(array[i]));
            }
            return array2;
        },

        sum: function (array, action) {
            var sum = 0;
            for (var i = 0; i < array.length; i++) {
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
            var array2 = new Array();
            for (var i = 0; i < limit && i < array.length; i++) {
                array2.push(array[i]);
            }
            return array2;
        }
    },
    number: {
        pad: function (str, max) {
            str = str.toString();
            return str.length < max ? this.pad("0" + str, max) : str;
        }
    }
}