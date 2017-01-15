"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
require('rxjs/add/operator/map');
var CollectionService = (function () {
    function CollectionService(Http, SocketService) {
        this.update = new core_1.EventEmitter();
        this.Http = Http;
        this.socket = SocketService.socket();
        var that = this;
        this.socket.on('collection', function (collection) {
            that.collection = collection;
            that.updateCollection();
        });
    }
    /**
     *
     */
    CollectionService.prototype.getCollection = function () {
        this.socket.emit('collection:get');
    };
    /**
     *
     */
    CollectionService.prototype.addItemToCollection = function (item) {
        this.socket.emit('collection:add', item);
    };
    CollectionService.prototype.updateCollection = function () {
        this.update.emit(this.collection);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CollectionService.prototype, "update", void 0);
    CollectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, socket_service_1.SocketService])
    ], CollectionService);
    return CollectionService;
}());
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map