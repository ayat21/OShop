import { AdminAuthGuard } from './services/admin-auth.guard';
import { RouterModule, CanActivate } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { DataTableModule } from "angular-4-data-table";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFireAuthModule}  from '@angular/fire/auth';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuard } from './services/auth.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    DataTableModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'products', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'login', component:LoginComponent},

      {path:'check-out', component:CheckOutComponent,
      canActivate:[AuthGuard]},

      {path:'order-success', component:OrderSuccessComponent
      , canActivate:[AuthGuard]},

      {path:'my/orders', component:MyOrdersComponent
      , canActivate:[AuthGuard]},

      {path:'admin/products/new', component:ProductFormComponent
      , canActivate:[AuthGuard,AdminAuthGuard]},

      {path:'admin/products/:id', component:ProductFormComponent
      , canActivate:[AuthGuard,AdminAuthGuard]},

      {path:'admin/products', component:AdminProductsComponent
      , canActivate:[AuthGuard,AdminAuthGuard]},

      {path:'admin/orders', component:AdminOrdersComponent
      , canActivate:[AuthGuard,AdminAuthGuard]},
    ]),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
