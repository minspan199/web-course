import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { ServerComponent } from './severs/server.component';
import { SubServerComponent } from './sub-server/sub-server.component';
import { RedServerComponent } from './red-server/red-server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubServerComponent,
    RedServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
