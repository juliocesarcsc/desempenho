/**
 * Created by Julio on 09-11-17.
 */
var swig = require('swig');
var render = function (file, params) {
    return swig.renderFile('view/' + file + '.html', params);
}
myApp.render = render;
