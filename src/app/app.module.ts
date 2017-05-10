import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// thrid party imports

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing'
import { HomeComponent } from './home/home.component';
import { SafePipe } from './utility/safe.pipe'
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoFormComponent } from './video-form/video-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoDetailComponent,
    VideoListComponent,
    SafePipe,
    HomeComponent,
    SearchComponent,
    SearchDetailComponent,
    VideoFormComponent

  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
