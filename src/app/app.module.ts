import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionComponent } from './action/action.component';
import { SortDirectiveDirective } from './sort-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    SortDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
