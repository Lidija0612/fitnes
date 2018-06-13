import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ClanstvoComponent } from './clanstvo/clanstvo.component';
import { TreninziComponent } from './treninzi/treninzi.component';
import { RasporedComponent } from './raspored/raspored.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    ClanstvoComponent,
    TreninziComponent,
    RasporedComponent,
    PocetnaComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    routes,
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    MatTableModule,
		MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
