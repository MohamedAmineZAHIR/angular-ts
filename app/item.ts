import {SimpleChange, ViewChild, ElementRef, Component, Input, Output, EventEmitter, trigger, state, style, transition, animate} from '@angular/core';
import {Item as ItemModel} from './models/item';

@Component({
    selector: 'item',
    templateUrl: 'app/item.html',
    styleUrls: [
        'app/app.component.css'
    ],
})
export class Item {
    @Input() item: ItemModel;
    oldState: number;
    @ViewChild('divRef') divRef: ElementRef;

    ngAfterViewInit() {
        console.log(this.divRef.nativeElement);
    }

    ngOnInit() {
        this.oldState = this.item.state;
    }

    ngDoCheck() {
        if (this.item.state != this.oldState) {
            console.log(`oldState : ${this.oldState}`);
            console.log(`now : ${this.item.state}`);
            console.log('-----------------------------');

            this.oldState = this.item.state;
        }
    }
}
