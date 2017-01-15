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
var item_1 = require('./models/item');
var Item = (function () {
    function Item() {
    }
    Item.prototype.ngAfterViewInit = function () {
        console.log(this.divRef.nativeElement);
    };
    Item.prototype.ngOnInit = function () {
        this.oldState = this.item.state;
    };
    Item.prototype.ngDoCheck = function () {
        if (this.item.state != this.oldState) {
            console.log("oldState : " + this.oldState);
            console.log("now : " + this.item.state);
            console.log('-----------------------------');
            this.oldState = this.item.state;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_1.Item)
    ], Item.prototype, "item", void 0);
    __decorate([
        core_1.ViewChild('divRef'), 
        __metadata('design:type', core_1.ElementRef)
    ], Item.prototype, "divRef", void 0);
    Item = __decorate([
        core_1.Component({
            selector: 'item',
            templateUrl: 'app/item.html',
            styleUrls: [
                'app/app.component.css'
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], Item);
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map