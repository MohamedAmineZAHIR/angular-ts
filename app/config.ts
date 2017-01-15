import {Item} from './models/item';

export class Config {
    public static get APP_TITLE(): string { return 'Module de livraison'; }
    public static get API_ROUTES(): any { return {
        collection: '/collection'
    }; }
    public static get SOCKET_HOST(): string { return 'http://localhost:3000/'; }
}