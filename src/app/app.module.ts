import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './cart/cart/cart.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { OrderConfirmComponent } from './order/order-confirm/order-confirm.component';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { TermsComponent } from './terms/terms/terms.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
import { ShippingComponent } from './shipping/shipping/shipping.component';
import { ReturnComponent } from './return/return/return.component';
import { CancellationComponent } from './cancellation/cancellation/cancellation.component';

export function HttpLoaderFactory( httpClient: HttpClient): TranslateHttpLoader{
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CartComponent,
    UserComponent,
    LoginComponent,
    ContactComponent,
    SignupComponent,
    ProfileComponent,
    CheckoutComponent,
    OrderConfirmComponent,
    TermsComponent,
    PrivacyComponent,
    ShippingComponent,
    ReturnComponent,
    CancellationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    SharedModule,
    FontAwesomeModule,
    IvyCarouselModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(
      {timeOut: 1000}
    ),
    Ng2SearchPipeModule
  ],
  exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
