"use strict";
var HelpJS = {
    Array: {
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
    Number: {
        pad: function (str, max) {
            str = str.toString();
            return str.length < max ? this.pad("0" + str, max) : str;
        }
    },
    String: {
        replaceAll: function (str, find, replace) {
            return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
        }
    },
    Web:{
        Http: {
            methods: {
                OPTIONS: "OPTIONS",
                GET: "GET",
                HEAD: "HEAD",
                POST: "POST",
                PUT: "PUT",
                DELETE: "DELETE",
                TRACE: "TRACE",
                CONNECT: "CONNECT"
            },
            objectToParameters: function(object){
                var result = [];
                for(var propertie in object){
                    result.push(propertie + ":" + object[propertie]);
                }
                return "?"+result.join("&");
            },
            send: function(url,sucessCallback,errorCallback){
                url = {
                    parameters: (HelpJS.web.http.objectToParameters(url.parameters)||""),
                    url: url.url,
                    method: url.method||web.http.methods.GET,
                    async: url.async||true,
                    user: url.user||"",
                    password: url.password||"",
                    data: url.data
                };
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange=function(){
                    if (xmlhttp.readyState==4){
                        if(xmlhttp.status>=200 && xmlhttp.status<300){
                            sucessCallback(xmlhttp.responseText, xmlhttp.status);
                        }else {
                            errorCallback(xmlhttp.responseText, xmlhttp.status);
                        }
                    }
                };
                xmlhttp.open(url.method, url.url + url.parameters, url.async, url.user, url.password);
                (url.data)?xmlhttp.send(url.data):xmlhttp.send();
            }
        }
    }
};
