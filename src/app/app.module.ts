import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { Globals } from './globals';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { NewsitemsComponent } from './components/newsitems/newsitems.component';
import { ChartComponent } from './components/chart/chart.component';
import { PconferenceComponent } from './components/pconference/pconference.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { InsertnewsComponent } from './components/insertnews/insertnews.component';
import { UpdateheadlineComponent } from './components/updateheadline/updateheadline.component';
import { UpdatechartComponent } from './components/updatechart/updatechart.component';
import { UpdatecaseComponent } from './components/updatecase/updatecase.component';
import { LiveComponent } from './components/live/live.component';
import { VideoupdateComponent } from './components/videoupdate/videoupdate.component';
import { DrugstoreComponent } from './components/drugstore/drugstore.component';
import { NewsComponent } from './components/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    MapComponent,
    NewsitemsComponent,
    ChartComponent,
    PconferenceComponent,
    LoginComponent,
    DashboardComponent,
    EditnewsComponent,
    InsertnewsComponent,
    UpdateheadlineComponent,
    UpdatechartComponent,
    UpdatecaseComponent,
    LiveComponent,
    VideoupdateComponent,
    DrugstoreComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ImageCropperModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    Globals,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
