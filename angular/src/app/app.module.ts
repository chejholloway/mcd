import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StarWarsService } from './starwars.service';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ StarWarsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
