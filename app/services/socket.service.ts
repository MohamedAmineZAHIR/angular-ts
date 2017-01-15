import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

import {Config} from '../config';

@Injectable()
export class SocketService {
    connection: any;

    constructor() {
        this.connection = io.connect(Config.SOCKET_HOST);
    }

    socket () {
        return this.connection;
    }
}