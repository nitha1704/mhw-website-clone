import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {SwiperModule} from 'swiper/angular'
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateNewComponent } from './components/update-new/update-new.component';
import { LastestInformationComponent } from './components/lastest-information/lastest-information.component';
import { MhwMediaComponent } from './components/mhw-media/mhw-media.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UpdateNewComponent,
    LastestInformationComponent,
    MhwMediaComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
