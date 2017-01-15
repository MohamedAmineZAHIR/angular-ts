import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TitleModule }   from './title/title.module';

import { AppComponent }  from './app.component';
import {Item as ItemComponent} from './item';
import {ItemForm} from './item.form';
import {ItemPipe} from './pipes/item.filter';

import {ItemService} from './services/item.service';
import {CollectionService} from './services/collection.service';
import {SocketService} from './services/socket.service';

@NgModule({
  imports: [BrowserModule, FormsModule, TitleModule, HttpModule],
  declarations: [AppComponent, ItemComponent, ItemForm, ItemPipe],
  bootstrap: [AppComponent],
  providers: [ItemService, CollectionService, SocketService]
})
export class AppModule { }
