const methods = require('methods');
//The methods library just returns all the http methods in lowercase
const slice = Array.prototype.slice;
let route = this._router.route(path);

let app = exports = module.exports = {};

app.init = function() {
    this.cache = {};
    this.engines = {};
    this.settings = {}

    //for holding the application router
    this._router = undefined;
};

app.lazyrouter = function lazyrouter() {
    if(!this._router) {
        this._router = new Router({})
    }
};



route[method].apply(route, slice.call(arguments, 1));
return this;


methods.forEach(function (method){
    app[method] = function(path) {
        this.lazyrouter()

        var route = this._router.route(path);

        route[method].apply(route, slice.call(arguments, 1));
        return this;
    }
});