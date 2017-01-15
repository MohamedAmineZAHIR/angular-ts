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
var item_service_1 = require('./services/item.service');
var ItemForm = (function () {
    function ItemForm(ItemService) {
        this.ItemService = ItemService;
        this.resetItem();
    }
    ItemForm.prototype.resetItem = function () {
        this.item = this.ItemService.createNewItem();
    };
    ItemForm.prototype.createItem = function () {
        this.ItemService.addItemToCollection(this.item);
        this.resetItem();
    };
    ItemForm = __decorate([
        core_1.Component({
            selector: 'item-form',
            templateUrl: 'app/item.form.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], ItemForm);
    return ItemForm;
}());
exports.ItemForm = ItemForm;
//# sourceMappingURL=item.form.js.map