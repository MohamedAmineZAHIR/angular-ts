import {Injectable, EventEmitter, Output} from '@angular/core';
import {Config} from '../config';
import {Item} from '../models/Item';
import {Http, Response} from '@angular/http';
import {Observable}  from 'rxjs/Observable';

import {SocketService} from './socket.service';

import 'rxjs/add/operator/map';

@Injectable()
export class CollectionService {
    public collection: Item[];
    private Http: Http;
    private socket: any;
    @Output() update: EventEmitter<Item[]> = new EventEmitter();

    constructor(Http: Http, SocketService: SocketService) {
        this.Http = Http;
        this.socket = SocketService.socket();
        let that = this;

        this.socket.on('collection', function(collection: Item[]) {
            that.collection = collection;
            that.updateCollection();
        })
    }

    /**
     * 
     */
    getCollection(): any {
        this.socket.emit('collection:get');
    }

    /**
     * 
     */
    addItemToCollection(item: Item): any {
        this.socket.emit('collection:add', item);
    }

    updateCollection() {
        this.update.emit(this.collection);
    }
}