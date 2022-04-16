import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// dependencias do primeng
import { MenubarModule } from 'primeng/menubar';

//dependencia do bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';

//dependencias abaixo somente para simulacao de backend. quando houver um backend funcionando pode retirar essas dependencias
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { inMememoryDatabase } from './in-memory-database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(inMememoryDatabase),
    TooltipModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
