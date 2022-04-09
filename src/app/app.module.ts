import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// dependencias do primeng
import { MenubarModule } from 'primeng/menubar';

//dependencias abaixo somente para simulacao de backend. quando houver um backend funcionando pode retirar essas dependencias
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { inMememoryDatabase } from './in-memory-database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientInMemoryWebApiModule.forRoot(inMememoryDatabase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
