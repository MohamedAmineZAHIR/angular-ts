"use strict";
var Config = (function () {
    function Config() {
    }
    Object.defineProperty(Config, "APP_TITLE", {
        get: function () { return 'Module de livraison'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config, "API_ROUTES", {
        get: function () {
            return {
                collection: '/collection'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config, "SOCKET_HOST", {
        get: function () { return 'http://localhost:3000/'; },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map