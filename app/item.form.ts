import {Component} from '@angular/core';
import {Item} from './models/item';
import {ItemService} from './services/item.service';

@Component({
    selector: 'item-form',
    templateUrl: 'app/item.form.html'
})
export class ItemForm {
    private item: Item;
    private ItemService: ItemService;

    constructor(ItemService: ItemService) {
        this.ItemService = ItemService;
        this.resetItem();
    }

    resetItem() {
        this.item = this.ItemService.createNewItem();
    }

    createItem() {
        this.ItemService.addItemToCollection(this.item);
        this.resetItem();
    }
}
