import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailsComponent } from './famous-person-details/famous-person-details.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path:'donuts', component:DonutsComponent},
  {path: 'donut-details/:id', component:DonutDetailsComponent},
  {path: 'famous-people', component:FamousPeopleComponent},
  {path:'famous-person-details', component:FamousPersonDetailsComponent},
  {path: '', redirectTo: '/donuts', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailsComponent,
    FamousPeopleComponent,
    FamousPersonDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
