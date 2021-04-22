import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ListadosComponent } from './listados/listados.component';
import { ListadooComponent } from './listadoo/listadoo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadosComponent,
    ListadooComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
