import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products.routing.module';
import { PriceComponent } from './components/price/price.component';
import { ProductComponent } from './pages/products/products.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductComponent,
    PriceComponent,
  ],
})
export class ProductsModule { }
