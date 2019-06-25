import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [AppComponent, PersonListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
