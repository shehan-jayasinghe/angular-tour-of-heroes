import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './server/servers.component';
import { ServesComponent } from './serves/serves.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
