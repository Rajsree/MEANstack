import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//if you use something, you need to tell ts from where to import
import { PostCreateComponent } from './posts/post-create/post-create.component';
@NgModule({
  declarations: [ //declare class so angular will be aware of it
    AppComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
