import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { FetchOrdersComponent } from './fetch-orders/fetch-orders.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { FetchProductOrdersComponent } from './fetch-product-orders/fetch-product-orders.component';



const routes: Routes = [
{path:'add',component:OrdercomponentComponent},
{path:'list',component:FetchOrdersComponent},
{path:'addproductorder',component:OrderProductComponent},
{path:'listproduct',component:FetchProductOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
