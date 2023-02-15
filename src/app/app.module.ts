import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ShowListComponent } from './show-list/show-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TheaterListComponent } from './theater-list/theater-list.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { TheaterCardComponent } from './theater-card/theater-card.component';
import { PurchaseDialogComponent } from './purchase-dialog/purchase-dialog.component';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    LoginFormComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
    ShowListComponent,
    MovieListComponent,
    TheaterListComponent,
    ShowCardComponent,
    MovieCardComponent,
    TheaterCardComponent,
    PurchaseDialogComponent,
    TicketDialogComponent,
    TicketCardComponent,
    QrCodeComponent,
  ],
  imports: [
    BrowserModule,
    MatCommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
