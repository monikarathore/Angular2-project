import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovielistComponent } from './components/movielist/movielist.component';

const appRoutes: Routes = [
  { path: 'movielist', component: MovielistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovielistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
