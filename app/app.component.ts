import {Component} from '@angular/core';
import {Item} from './models/item';
import {Config} from './config';
import {CollectionService} from './services/collection.service';
import {SocketService} from './services/socket.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [
        'app/app.component.css'
    ]
})
export class AppComponent {
    private title: string;
    private version: string;
    private collection: Item[];

    constructor(CollectionService: CollectionService, SocketService: SocketService) {
        CollectionService.update.subscribe((collection: Item[]) => {
            this.collection = collection;
        });

        CollectionService.getCollection();
    }
}