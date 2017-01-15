"use strict";
var Item = (function () {
    function Item(data) {
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
        this.animateState = 'created';
    }
    Item.prototype.toggleAnimateState = function () {
        this.animateState = this.animateState === 'created' ? 'active' : 'created';
    };
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=item.js.map