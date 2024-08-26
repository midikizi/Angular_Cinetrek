import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpinterceportInterceptor } from './service/httpinterceport.interceptor';

@NgModule({
  declarations: [
    AppComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut: 7000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }
    ), // ToastrModule added
  ],
  providers: [
    provideHttpClient(),
    {provide: HTTP_INTERCEPTORS, useClass: HttpinterceportInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
