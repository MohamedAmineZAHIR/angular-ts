import {Component} from '@angular/core';
import {Config} from '../config';

@Component({
    selector: 'my-title',
    templateUrl: 'app/title/title.component.html'
})
export class TitleComponent {
    private title: string;

    constructor() {
        this.title = Config.APP_TITLE;
    }
}
